class Item {
	constructor(data) {
		const {name, content, date} = data;
		this.name = name;
		this.content = content;
		this.date = date;
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



