const DriverpervehicleModel = require('./driverpervehicle.model');

class RouteRequestModel {
    constructor(
        id = '',
        DriverVehicle = new DriverpervehicleModel(),
        routeRequestOriginLatitude = '',
        routeRequestOriginLongitude = '',
        routeRequestEndLatitude = '',
        routeRequestEndLongitude = '',
        routeCapacity = 0
    ) {
        this.id = id;
        this.DriverVehicle = DriverVehicle;
        this.routeRequestOriginLatitude = routeRequestOriginLatitude;
        this.routeRequestOriginLongitude = routeRequestOriginLongitude;
        this.routeRequestEndLatitude = routeRequestEndLatitude;
        this.routeRequestEndLongitude = routeRequestEndLongitude;
        this.routeCapacity = routeCapacity;
    }
}

module.exports = RouteRequestModel;
