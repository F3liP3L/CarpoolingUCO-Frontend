const DriverPerVehicleModel = require('./driverpervehicle');
const PositionModel = require('./position.model');

class RouteActiveModel {
    constructor(
        id = '',
        driverVehicle = new DriverPerVehicleModel(),
        routeCapacity = 0,
        origin = new PositionModel(),
        destination = new PositionModel(),
        color = ''
    ) {
        this.id = id;
        this.driverVehicle = driverVehicle;
        this.routeCapacity = routeCapacity;
        this.origin = origin;
        this.destination = destination;
        this.color = color;
    }
}

module.exports = RouteActiveModel;
