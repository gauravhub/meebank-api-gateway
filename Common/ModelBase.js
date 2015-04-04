var ModelBase = (function () {
    function ModelBase() {
    }
    ModelBase.prototype.validate = function () {
        return true;
    };
    ModelBase.prototype.toJSON = function () {
        return {};
    };
    ModelBase.prototype.fromJSON = function (json) {
        return {};
    };
    return ModelBase;
})();
module.exports = ModelBase;
//# sourceMappingURL=ModelBase.js.map