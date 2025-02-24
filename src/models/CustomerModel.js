class CustomerModel {
    constructor(
        id = '',
        dni = '',
        firstName = '',
        secondName = '',
        firstSurname = '',
        secondSurname = '',
        password = '',
        companyEmail = '',
        phone = '',
        rol = 0
    ) {
        this.id = id;
        this.dni = dni;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstSurname = firstSurname;
        this.secondSurname = secondSurname;
        this.password = password;
        this.companyEmail = companyEmail;
        this.phone = phone;
        this.rol = rol;
    }
}

module.exports = CustomerModel;
