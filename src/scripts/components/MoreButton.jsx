var React = require('react');

var MoreButton = React.createClass({

	styles: {
		borderRadius: 5,
		border: '0 none',
		width: '100%',
		height: '3em',
		fontSize: '20',
		marginTop: '1em'
	},

	render() {
		return (
			<button onClick={this.props.onClick}
				className='button'
				style={this.styles}>Load More</button>
		)
	}
});

module.exports = MoreButton;
