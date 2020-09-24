"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setValidations = void 0;
var utils_1 = require("./utils");
var vue_1 = require("vue");
function sortValidations(validationsRaw) {
    if (validationsRaw === void 0) { validationsRaw = {}; }
    var validations = utils_1.unwrap(validationsRaw);
    var validationKeys = Object.keys(validations);
    var rules = {};
    var nestedValidators = {};
    var config = {};
    validationKeys.forEach(function (key) {
        var v = validations[key];
        switch (true) {
            case utils_1.isFunction(v.$validator):
                rules[key] = v;
                break;
            case utils_1.isFunction(v):
                rules[key] = { $validator: v };
                break;
            case key.startsWith('$'):
                config[key] = v;
                break;
            default:
                nestedValidators[key] = v;
        }
    });
    return { rules: rules, nestedValidators: nestedValidators, config: config };
}
function callRule(rule, value) {
    var v = utils_1.unwrap(value);
    return rule(v);
}
function normalizeValidatorResponse(result) {
    return result.$invalid !== undefined
        ? !result.$invalid
        : !result;
}
function createComputedResult(rule, model, $dirty) {
    return vue_1.computed(function () {
        if (!$dirty.value)
            return false;
        var result = callRule(rule, utils_1.unwrap(model));
        if (utils_1.isPromise(result)) {
            throw Error('[vuelidate] detected a raw async validator. Please wrap any async validators in the `withAsync` helper.');
        }
        return normalizeValidatorResponse(result);
    });
}
function createAsyncResult(rule, model, $pending, $dirty) {
    var $invalid = vue_1.ref(!!$dirty.value);
    var $pendingCounter = vue_1.ref(0);
    $pending.value = false;
    vue_1.watch([model, $dirty], function (modelValue) {
        if (!$dirty.value)
            return false;
        var ruleResult = callRule(rule, model);
        $pendingCounter.value++;
        $pending.value = !!$pendingCounter.value;
        $invalid.value = true;
        ruleResult
            .then(function (data) {
            $pendingCounter.value--;
            $pending.value = !!$pendingCounter.value;
            $invalid.value = normalizeValidatorResponse(data);
        })
            .catch(function () {
            $pendingCounter.value--;
            $pending.value = !!$pendingCounter.value;
            $invalid.value = true;
        });
    }, { flush: 'sync' });
    return $invalid;
}
function createValidatorResult(rule, state, key, $dirty) {
    var model = vue_1.computed(function () {
        var s = utils_1.unwrap(state);
        return s ? utils_1.unwrap(s[key]) : null;
    });
    var $pending = vue_1.ref(false);
    var $params = rule.$params || {};
    var $invalid = rule.$async
        ? createAsyncResult(rule.$validator, model, $pending, $dirty)
        : createComputedResult(rule.$validator, model, $dirty);
    var message = rule.$message;
    var $message = utils_1.isFunction(message)
        ? vue_1.computed(function () {
            return message(utils_1.unwrapObj({
                $pending: $pending,
                $invalid: $invalid,
                $params: utils_1.unwrapObj($params),
                $model: model
            }));
        })
        : message || '';
    return {
        $message: $message,
        $params: $params,
        $pending: $pending,
        $invalid: $invalid
    };
}
function createValidationResults(rules, state, key, parentKey, resultsCache, path) {
    var ruleKeys = Object.keys(rules);
    var cachedResult = resultsCache.get(path);
    var $dirty = vue_1.ref(false);
    var result = {
        $dirty: cachedResult ? cachedResult.$dirty : $dirty,
        $touch: function () { if (!$dirty.value)
            $dirty.value = true; },
        $reset: function () { if ($dirty.value)
            $dirty.value = false; }
    };
    if (!ruleKeys.length)
        return result;
    ruleKeys.forEach(function (ruleKey) {
        result[ruleKey] = createValidatorResult(rules[ruleKey], state, key, result.$dirty);
    });
    result.$invalid = vue_1.computed(function () {
        return ruleKeys.some(function (ruleKey) { return result[ruleKey].$invalid.value; });
    });
    result.$pending = vue_1.computed(function () {
        return ruleKeys.some(function (ruleKey) { return result[ruleKey].$pending.value; });
    });
    result.$error = vue_1.computed(function () {
        return result.$invalid.value && result.$dirty.value;
    });
    result.$errors = vue_1.computed(function () { return ruleKeys
        .filter(function (ruleKey) { return result[ruleKey].$invalid.value; })
        .map(function (ruleKey) {
        var res = result[ruleKey];
        return vue_1.reactive({
            $propertyPath: path,
            $property: key,
            $validator: ruleKey,
            $message: res.$message,
            $params: res.$params,
            $pending: res.$pending
        });
    }); });
    resultsCache.set(path, result);
    return result;
}
function collectNestedValidationResults(validations, state, key, path, resultsCache) {
    var nestedValidationKeys = Object.keys(validations);
    if (!nestedValidationKeys.length)
        return {};
    return nestedValidationKeys.reduce(function (results, nestedKey) {
        var nestedState = key ? state[key] : state;
        results[nestedKey] = setValidations({
            validations: validations[nestedKey],
            state: nestedState,
            key: nestedKey,
            parentKey: key,
            resultsCache: resultsCache
        });
        return results;
    }, {});
}
function createMetaFields(results) {
    var otherResults = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherResults[_i - 1] = arguments[_i];
    }
    var $dirty = results.$dirty;
    var allResults = vue_1.computed(function () { return otherResults
        .filter(function (res) { return res; })
        .reduce(function (allRes, res) {
        return allRes.concat(Object.values(utils_1.unwrap(res)));
    }, []); });
    var $errors = vue_1.computed(function () {
        var modelErrors = utils_1.unwrap(results.$errors) || [];
        var nestedErrors = allResults.value
            .filter(function (result) { return utils_1.unwrap(result).$errors.length; })
            .reduce(function (errors, result) {
            return errors.concat.apply(errors, result.$errors);
        }, []);
        return modelErrors.concat(nestedErrors);
    });
    var $invalid = vue_1.computed(function () {
        return allResults.value.some(function (r) { return r.$invalid; }) ||
            utils_1.unwrap(results.$invalid) ||
            false;
    });
    var $pending = vue_1.computed(function () {
        return allResults.value.some(function (r) { return utils_1.unwrap(r.$pending); }) ||
            utils_1.unwrap(results.$pending) ||
            false;
    });
    var $anyDirty = vue_1.computed(function () {
        return allResults.value.some(function (r) { return r.$dirty; }) || $dirty.value;
    });
    var $error = vue_1.computed(function () { return ($invalid.value && $dirty.value) || false; });
    var $touch = function () {
        results.$touch();
        Object.values(allResults.value).forEach(function (result) {
            result.$touch();
        });
    };
    var $reset = function () {
        results.$reset();
        Object.values(allResults.value).forEach(function (result) {
            result.$reset();
        });
    };
    return {
        $dirty: $dirty,
        $errors: $errors,
        $invalid: $invalid,
        $anyDirty: $anyDirty,
        $error: $error,
        $pending: $pending,
        $touch: $touch,
        $reset: $reset
    };
}
function setValidations(_a) {
    var validations = _a.validations, state = _a.state, key = _a.key, parentKey = _a.parentKey, childResults = _a.childResults, resultsCache = _a.resultsCache;
    var path = parentKey ? parentKey + "." + key : key;
    var _b = sortValidations(validations), rules = _b.rules, nestedValidators = _b.nestedValidators, config = _b.config;
    var results = createValidationResults(rules, state, key, parentKey, resultsCache, path);
    var nestedResults = collectNestedValidationResults(nestedValidators, state, key, path, resultsCache);
    var _c = createMetaFields(results, nestedResults, childResults), $dirty = _c.$dirty, $errors = _c.$errors, $invalid = _c.$invalid, $anyDirty = _c.$anyDirty, $error = _c.$error, $pending = _c.$pending, $touch = _c.$touch, $reset = _c.$reset;
    var $model = key ? vue_1.computed({
        get: function () { return utils_1.unwrap(state[key]); },
        set: function (val) {
            $dirty.value = true;
            if (vue_1.isRef(state[key])) {
                state[key].value = val;
            }
            else {
                state[key] = val;
            }
        }
    }) : null;
    if (config.$autoDirty) {
        var watchTarget = vue_1.isRef(state[key]) ? state[key] : vue_1.toRef(state, key);
        vue_1.watch(watchTarget, function () {
            if (!$dirty.value)
                $touch();
        });
    }
    var $validate = function $validate() {
        return new Promise(function (resolve) {
            if (!$dirty.value)
                $touch();
            if (!$pending.value)
                return resolve(!$error.value);
            var unwatch = vue_1.watch($pending, function () {
                resolve(!$error.value);
                unwatch();
            });
        });
    };
    return vue_1.reactive(__assign(__assign(__assign({}, results), { $model: $model,
        $dirty: $dirty,
        $error: $error,
        $errors: $errors,
        $invalid: $invalid,
        $anyDirty: $anyDirty,
        $pending: $pending,
        $touch: $touch,
        $reset: $reset,
        $validate: $validate }), nestedResults));
}
exports.setValidations = setValidations;
//# sourceMappingURL=core.js.map