import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			homeLink: 'Home',
			hasError: false
		};
	}

	onGreet() {
		alert('Hello!');
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong</h1>;
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home
							name={'Max'}
							initialAge={28}
							greet={this.onGreet}
							changeLink={() => this.onChangeLinkName(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

render(<App />, window.document.getElementById('app'));
