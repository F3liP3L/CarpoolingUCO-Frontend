class SignUpForm {
    constructor(
        id = '',
        dni = '',
        firstName = '',
        secondName = '',
        firstSurname = '',
        secondSurname = '',
        password = '',
        phone = '',
        companyEmail = '',
        licenseNumber = '',
        authorizedCategory = { id: '', category: '', validity: '' }
    ) {
        this.id = id;
        this.dni = dni;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstSurname = firstSurname;
        this.secondSurname = secondSurname;
        this.password = password;
        this.phone = phone;
        this.companyEmail = companyEmail;
        this.licenseNumber = licenseNumber;
        this.authorizedCategory = authorizedCategory;
    }
}

module.exports = SignUpForm;
