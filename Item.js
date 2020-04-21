class Item {
	constructor(props) {
		const {name, content, date} = props;
		this.name = name;
		this.content = content;
		this.date = date;
	}

	isContentValid(){
		return this.content.length <= 1000 ;
	}

	isDateValid(){
		if(this.date === null){
			return false
		}else{
			console.log(!isNaN(Date.parse(this.date)))
			return(!isNaN(Date.parse(this.date))); // si il n'est pas nan

		}
	}

}
module.exports = Item;
