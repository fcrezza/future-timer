import React, {useState, Fragment} from 'react'
import Header from './Header'
import ListInput from '../components/ListInput'
import ListItem from './ListItem'
import Button from '../components/Button'

function StartPage ({setTimer, timer, history}) {
	const [lists, setLists] = useState([
	  { id: 1, name: "Lari", duration: { hour: "0", minute: "5", second: "30" } },
	  { id: 2, name: "mandi", duration: { hour: "0", minute: "2", second: "0" } }
	])

	function handleSetTimer (id, value) {
	  setTimer({ ...timer, [id]: value })
	}
	
	function start() {
		history.push('/run')
	}

	return (
		<Fragment>
			<Header />
			<ListInput {...{ timer, handleSetTimer }} />
			<ListItem {...{ lists, setLists, setTimer }} />
			<Button text="Mulai" handleSubmit={start}/>
		</Fragment>
	)
}

export default StartPage