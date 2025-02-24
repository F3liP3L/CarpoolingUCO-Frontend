const CustomerModel = require('./CustomerModel');
const AuthorizedCategoryModel = require('./AuthorizedCategoryModel');

class DriverModel {
    constructor(
        id = '',
        licenseNumber = '',
        authorizedCategory = new AuthorizedCategoryModel(),
        customer = new CustomerModel()
    ) {
        this.id = id;
        this.licenseNumber = licenseNumber;
        this.authorizedCategory = authorizedCategory;
        this.customer = customer;
    }
}

module.exports = DriverModel;
