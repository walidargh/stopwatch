var React = require('react');

var  Buttons = React.createClass({
	render: function () {
		var btn1Text, btn2Text;
		if (this.props.running) {
			btn1Text = "Split";
			btn2Text = "Stop";
		} else {
			btn1Text = "Start";
			btn2Text = "Reset";
		}
		return(
			<div>
				<button onClick={this.props.button1CallBack}>{btn1Text}</button>
				<button onClick={this.props.button2CallBack}>{btn2Text}</button>
			</div>
		);
	}
});

module.exports = Buttons;
