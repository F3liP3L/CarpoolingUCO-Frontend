class RouteModel {
    constructor(
        id = '',
        driverVehicle = new DriverPerVehicleModel(),
        routeCapacity = 0,
        pointsOfInterest = [],
        position = [],
        routeTime = '',
        routeStatus = new StatusModel()
    ) {
        this.id = id;
        this.driverVehicle = driverVehicle;
        this.routeCapacity = routeCapacity;
        this.pointsOfInterest = pointsOfInterest.map(poi => new PointOfInterestModel(poi.id, poi.name));
        this.position = position.map(pos => new PositionModel(pos.latitude, pos.longitude, pos.address));
        this.routeTime = routeTime;
        this.routeStatus = routeStatus;
    }
}

module.exports = RouteModel;
