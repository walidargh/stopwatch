var React = require('react'),
		Buttons = require('./buttons'),
		Display = require('./display'),
		Splits = require('./splits');

var Watch = React.createClass({
	getInitialState: function() {
		return {elapsed: 0, running: false, splits: []};
	},
	tick: function () {
		if (this.state.running) {
			this.setState({elapsed: this.state.elapsed + 1});
		}
	},
	button1Pressed: function() {
		if (this.state.running) {
			var splits = this.state.splits;
			splits.push(this.state.elapsed);
			this.setState({splits: splits});
		} else {
			this.setState({running: true});
		}
	},
	button2Pressed: function() {
		if(this.state.running) {
			this.setState({running: false});
		} else {
			this.setState({elapsed: 0, splits: []});
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
					<Splits splits={this.state.splits} />
			</div>
		);
	}
});

module.exports = Watch;
