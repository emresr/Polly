import Reac, { Fragment } from "react"
import Input from "./Input.js"
import List from "./List.js"

const Mainpage = () => {
	return (
		<Fragment>
			<div classname="leftcolumn">
				<h1>lmao</h1>
				<Input />
			</div>
			<div classname="rightcolumn">
				<List />
			</div>
		</Fragment>
	)
}

export default Mainpage
