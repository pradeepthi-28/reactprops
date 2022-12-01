import {Component} from 'react'
class Events extends Component{
	state={
		Username:""
	}
	handlechange=()=>{
		alert()
	}
	render(){
		return(
			<div>
			<input onChange={this.handlechange} placeholder="Enter Username"/>
			</div>
			)
	}

}
export default Events