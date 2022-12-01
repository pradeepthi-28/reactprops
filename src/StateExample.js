import React from 'react'
class StateExample extends React.Component{
	state={name:"rolls royce",year:"1988"}
	render(){
		return(
			<div>
				<p>{this.state.name} {this.state.year}</p>
			</div>
			)
	}
}
export default StateExample