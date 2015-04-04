var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Common = require("../../Common/index");
var Property = Common.Property;
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        _super.apply(this, arguments);
        this.token = new Property("token", [{ required: true }]);
        this.parentToken = new Property("parent_token");
        this.usesParentAccount = new Property("uses_parent_account", false);
        this.active = new Property("active", true);
        this.title = new Property("honorific");
        this.firstName = new Property("first_name");
        this.middleName = new Property("middle_name");
        this.lastName = new Property("last_name");
        this.birth_date = new Property("birth_date");
        this.gender = new Property("gender");
        this.email = new Property("email");
        this.phone = new Property("phone");
        this.ssn = new Property("ssn");
        this.address1 = new Property("address1");
        this.address2 = new Property("address2");
        this.city = new Property("city");
        this.state = new Property("state");
        this.zip = new Property("zip");
        this.country = new Property("country");
    }
    return User;
})(Common.ModelBase);
var user = new User();
module.exports = User;
//# sourceMappingURL=User.js.map