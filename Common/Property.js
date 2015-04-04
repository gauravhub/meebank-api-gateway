var Property = (function () {
    function Property(jsonName, defaultValue, validators) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (validators === void 0) { validators = {}; }
        this.jsonName = jsonName;
        this.defaultValue = defaultValue;
        this.validators = validators;
    }
    Property.prototype.hasValue = function () {
        if (typeof this.value === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return Property;
})();
module.exports = Property;
//# sourceMappingURL=Property.js.map