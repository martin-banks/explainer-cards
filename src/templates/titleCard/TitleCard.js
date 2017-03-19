import Style from './style.css'


export default class TitleCard {
	constructor(props){
		this.props = props
	}

	template(){
		return `<div class="${Style.card}">
			<h1>Hello ${this.props.name}</h1>
		</div>`
	}



	
}