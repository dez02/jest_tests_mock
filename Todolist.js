const Item = require('./Item');

class TodoList {
    constructor(){
        this.items = []; // todolist
        this.allowAddItem = true;
    }

    getSize(){
        return this.items.length
    }

    addItem(data) {
        this.items.push(new Item(data));
    }

    canAddItem(item){
        if(this.allowAddItem){
					const bool = this.isNameUnique(item.name) && item.isContentValid() && item.isDateValid() && (this.getSize() <= 10);
					bool && this.updateTimer() // si true we call updatetimer else no
          return bool ? item : null;
        }
					return null
    }

    isNameUnique(name){
        const filterItems = this.items.filter(item => item.name === name)
        return ! filterItems.length
    }

    updateTimer(){
				const waitTime = 30 * 60 * 1000;
				this.allowAddItem = false;
        setTimeout(() => {
					this.allowAddItem = true;
        }, waitTime);
    }


}

module.exports = TodoList;
