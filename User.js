const util = require('./util');

class User {
    constructor(props) {
        const {firstname, lastname, email, age} = props;

        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
    }

    isValid() {
        return this.isFirstNameValid() && this.isLastNameValid() && this.isLegalAge()
    }

    isFirstNameValid() {
        return util.isNameValid(this.firstname)
    }

    isLastNameValid() {
        return util.isNameValid(this.lastname)
    }

    isEmailValid() {
        return util.isEmailValid(this.email)
    }

    isLegalAge() {
        return this.age >= 13
    }
}

module.exports = User;