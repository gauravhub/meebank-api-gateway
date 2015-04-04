import Common = require("../../Common/index");

var Property = Common.Property;

class User extends Common.ModelBase {
    token = new Property<string>("token", [{required: true}]);
    parentToken = new Property<string>("parent_token");
    usesParentAccount = new Property<boolean>("uses_parent_account", false);
    active = new Property<boolean>("active", true);

    title = new Property<string>("honorific");
    firstName = new Property<string>("first_name");
    middleName = new Property<string>("middle_name");
    lastName = new Property<string>("last_name");
    birth_date = new Property<string>("birth_date");
    gender = new Property<string>("gender");
    email = new Property<string>("email");
    phone = new Property<string>("phone");
    ssn = new Property<string>("ssn");

    address1 = new Property<string>("address1");
    address2 = new Property<string>("address2");
    city = new Property<string>("city");
    state = new Property<string>("state");
    zip = new Property<string>("zip");
    country = new Property<string>("country");
}

var user = new User();
export = User;