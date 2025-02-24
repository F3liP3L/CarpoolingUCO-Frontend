const DriverModel = require('./driver.model');

class VehicleModel {
    constructor(id = '', name = '', plate = '', capacity = 0, owner = new DriverModel()) {
        this.id = id;
        this.name = name;
        this.plate = plate;
        this.capacity = capacity;
        this.owner = owner;
    }
}

module.exports = VehicleModel;
