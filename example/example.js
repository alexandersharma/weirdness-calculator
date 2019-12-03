import Picker from '../lib/Picker'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
	constructor (props) {
		super(props)
		this.state = {
			enteredGif: []
		}
	}

	log (gif) {
		console.log(gif)
		let {enteredGif} = this.state
		enteredGif.push(gif)
		console.log('this is ', enteredGif)
		this.setState({enteredGif: enteredGif})
	}

	renderLoader() {
		return (<p style={{textAlign: 'center'}}>Loading...</p>)
	}

	render () {
		const {enteredGif} = this.state
		console.log('rerender ', enteredGif)
	/*	let url = ''
		if (enteredGif.fixed_width !== undefined) {
			url = enteredGif.fixed_width.url
		}*/
		return (
			<div id={'parent'}>
				<Picker id={'wide'}
					onSelected={::this.log}
					modal={false}
					loader={this.renderLoader()}
				/>
				<div id={'narrow'}>
					<h2>Selected GIFS</h2>
					{enteredGif.map((g, j) => {
						let url = ''
						if (g.fixed_width !== undefined) {
							url = g.fixed_width.url
						}
                        return (<div className={'selected_img_div'}><img className={'selected_img'} src={url} /> </div>)
					})}
					</div>
			</div>

		)
	}
}

ReactDOM.render(
	<TestComponent />,
	document.getElementById('root')
)
