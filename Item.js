class Item {
	constructor(props) {
		const {names, content, date} = props;
		this.names = names;
		this.content = content;
		this.date = date;
	}

	isNameUnique(){
		console.log(this.names);
		return new Set(this.names).size === this.names.length;

	}

	isContentValid(){
		return this.content.length <= 1000 ;
	}

	isDateValid(){
		if(this.date === null){
			return false;
		}else{
			return(!isNaN(Date.parse(this.date))); // il n'est pas nan
		}
	}
}
module.exports = Item;



// isNameUnique() {
// 	return new Set(this.names).size === this.names.length;
// }
// }

// const items1 = new Items(["un", "deux", "trois"]);
// const items2 = new Items(["un", "deux", ""]);

// console.assert(items1.isNameUnique() === true);
// console.assert(items2.isNameUnique() === false)