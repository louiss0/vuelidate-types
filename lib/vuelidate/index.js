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
exports.VuelidatePlugin = exports.VuelidateMixin = exports.useVuelidate = void 0;
var vue_1 = require("vue");
var utils_1 = require("./utils");
var core_1 = require("./core");
var VuelidateInjectChildResults = Symbol('vuelidate#injectChiildResults');
var VuelidateRemoveChildResults = Symbol('vuelidate#removeChiildResults');
function useVuelidate(validations, state, registerAs) {
    if (!registerAs) {
        var instance = vue_1.getCurrentInstance();
        registerAs = "_vuelidate_" + instance.type.name + "_" + instance.uid;
    }
    var resultsCache = new Map();
    var childResultsRaw = {};
    var childResultsKeys = vue_1.ref([]);
    var childResults = vue_1.computed(function () { return childResultsKeys.value.reduce(function (results, key) {
        results[key] = utils_1.unwrap(childResultsRaw[key]);
        return results;
    }, {}); });
    var injectToParent = vue_1.inject(VuelidateInjectChildResults, function () { });
    vue_1.provide(VuelidateInjectChildResults, injectChildResults);
    var removeFromParent = vue_1.inject(VuelidateRemoveChildResults, function () { });
    vue_1.provide(VuelidateRemoveChildResults, removeChildResults);
    function injectChildResults(results, key) {
        childResultsRaw[key] = results;
        childResultsKeys.value.push(key);
    }
    function removeChildResults(key) {
        childResultsKeys.value = childResultsKeys.value.filter(function (childKey) { return childKey !== key; });
        delete childResultsRaw[key];
    }
    var validationResults = vue_1.computed(function () { return core_1.setValidations({
        validations: utils_1.unwrap(validations),
        state: state,
        childResults: childResults,
        resultsCache: resultsCache
    }); });
    injectToParent(validationResults, registerAs);
    vue_1.onBeforeUnmount(function () { return removeFromParent(registerAs); });
    return vue_1.computed(function () {
        return __assign(__assign({}, validationResults.value), childResults.value);
    });
}
exports.useVuelidate = useVuelidate;
exports.VuelidateMixin = {
    beforeCreate: function () {
        var _this = this;
        var resultsCache = new Map();
        var options = this.$options;
        if (!options.validations)
            return;
        if (!options.computed)
            options.computed = {};
        if (options.computed.$v)
            return;
        var validations = vue_1.computed(function () { return utils_1.isFunction(options.validations)
            ? options.validations.call(_this)
            : options.validations; });
        var $v;
        options.computed.$v = function () {
            var _this = this;
            if ($v) {
                return $v.value;
            }
            else {
                $v = vue_1.computed(function () { return core_1.setValidations({ validations: validations, state: _this, resultsCache: resultsCache }); });
                return $v.value;
            }
        };
    }
};
function VuelidatePlugin(app) {
    app.mixin(exports.VuelidateMixin);
}
exports.VuelidatePlugin = VuelidatePlugin;
exports.default = useVuelidate;
//# sourceMappingURL=index.js.map