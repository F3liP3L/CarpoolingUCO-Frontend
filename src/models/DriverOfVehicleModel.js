const VehicleModel = require('./VehicleModel');
const StatusModel = require('./StatusModel');

class DriverPerVehicleModel {
    constructor(id = '', vehicle = new VehicleModel(), status = new StatusModel()) {
        this.id = id;
        this.vehicle = vehicle;
        this.status = status;
    }
}

module.exports = DriverPerVehicleModel;
