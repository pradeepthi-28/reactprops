import React from 'react'
function JSX(){
	/*return(
          <div>
          	<h1>good afternoon</h1>
          </div>
		)
}*/
	return React.createElement(
		"div",
		{id:"one",classname:"classone"},
		React.createElement("h1",null,"Good afternoon")
		)
}
export default JSX