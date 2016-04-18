var React = require('react'),
		Buttons = require('./buttons'),
		Display = require('./display');

var Watch = React.createClass({
	getInitialState: function() {
		return {elapsed: 0, running: false};
	},
	tick: function () {
		if (this.state.running) {
			this.setState({elapsed: this.state.elapsed + 1});
		}
	},
	button1Pressed: function() {
		if (!this.state.running) {
			this.setState({running: true});
		}
	},
	button2Pressed: function() {
		if(this.state.running) {
			this.setState({running: false});
		} else {
			this.setState({elapsed: 0});
		}
	},
	componentDidMount: function () {
		setInterval(this.tick, 1000);
	},
	render: function(){
		return (
			<div>
				<Display elapsed={this.state.elapsed}/>
				<Buttons
					running={this.state.running}
					button1CallBack={this.button1Pressed}
					button2CallBack={this.button2Pressed}/>
			</div>
		);
	}
});

module.exports = Watch;
