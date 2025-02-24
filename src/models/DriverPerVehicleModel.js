const VehicleModel = require('./VehicleModel');

class DriverPerVehicleModel {
    constructor(id = '', name = '', nameVehicle = '') {
        this.id = id;
        this.name = name;
        this.nameVehicle = nameVehicle;
    }
}

module.exports = DriverPerVehicleModel;
