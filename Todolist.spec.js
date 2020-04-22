const TodoList = require('./TodoList');
const Item = require('./Item')

describe('TodoList', () => {
    it('should return todoList size', () => {
        const todoList = new TodoList();
        expect(todoList.getSize()).toBeFalsy();
    });

    it('should allow to add an item', () => {
        const data = {
            'name': 'foo',
            'content': 'bar',
            'date': Date(Date.now())
        }
        const todoList = new TodoList();
        todoList.addItem(data);
        expect(todoList.getSize()).toEqual(1);
    });

    it('should return true if a name is unique', () => {
        const todoList = new TodoList();
        expect(todoList.isNameUnique('foo')).toBeTruthy();
    });

    it('should return false if a name is not unique', () => {
        const data = {
            'name': 'foo',
            'content': 'bar',
            'date': Date(Date.now())
        }
        const todoList = new TodoList();
        todoList.addItem(data);
        expect(todoList.isNameUnique('foo')).toBeFalsy();
    });

    it('should allow to add an item', () => {
        const data = {
            'name': 'bar',
            'content': 'foo',
            'date': Date(Date.now())
        }
        const item = new Item(data);

        const todoList = new TodoList();
        expect(todoList.canAddItem(item)).toEqual(item);

    });

    it('should return null if invalid item', () => {
        const data = {
            'name': 'bar',
            'content': 'foo',
            'date': ''        }
        const item = new Item(data);

        const todoList = new TodoList();
        expect(todoList.canAddItem(item)).toEqual(null);

    });

    it('should allow to add an item', () => {
        const data = {
            'name': 'truc',
            'content': 'trac',
            'date': Date(Date.now())
        }

        const data2 = {
            'name': 'machin',
            'content': 'chose',
            'date': Date(Date.now())
        }
        const item = new Item(data);
        const item2 = new Item(data2)

        const todoList = new TodoList();

        expect(todoList.canAddItem(item)).toEqual(item);
        expect(todoList.canAddItem(item2)).toEqual(null);



    });



});
