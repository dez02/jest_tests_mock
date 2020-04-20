const util = require('./util')

class User {
    constructor(obj) {
        this.firstname = obj.firstname
        this.lastname = obj.lastname
        this.email = obj.email
        this.age = obj.age
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