const Item = require('./Item');


describe('Item', () => {
	
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
