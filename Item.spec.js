const Item = require('./Item');


describe('Item', () => {
	it.skip('should return ok if the name is unique', () => {

		const item = new Item(["un", "deux", "trois"]);
		expect(item.isNameUnique()).toBeTruthy();
	});

	it.skip('should return false if the name appears twice', () => {
		const item = new Item(['first', 'second', 'first', 'third']);
		expect(item.isNameUnique()).toBeFalsy();
	});

	it('should return validContent', () => {
		const data = {
			'content':'this is a content'
		};

		const item = new Item(data);
		expect(item.isContentValid()).toBeTruthy();
	});

	it('should return false if date is empty', () => {
		const  data = {};
		const item = new Item(data);
		expect(item.isDateValid()).toBeFalsy();
	});

	it('should return false if date is invalidate', () => {
		const  data = {
			'date':''
		};
		const item = new Item(data);
		expect(item.isDateValid()).toBeFalsy();
	});

	it('should return true if date is valid', () => {
		const  data = {
			'date': Date(Date.now())
		};
		const item = new Item(data);
		expect(item.isDateValid()).toBeTruthy();
	});

})
