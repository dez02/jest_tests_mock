const util = require('./util');
const TodoList = require('./TodoList');

class User {
    constructor(props) {
        const {firstname, lastname, email, age} = props;

        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
        this.todoList = null;
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

    createTodoList(){
        if(this.todoList === null){
            this.todoList = new TodoList();
            return true
        }
        return false;

    }
}

module.exports = User;
