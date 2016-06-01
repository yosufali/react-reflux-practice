var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [
	{
		title: "Home",
		href: "/"
	},
	{
		title: "iOS Course",
		href: "/product/55"
	},
	{
		title: "React Course",
		href: "/product/67"
	}
];

var BasePage = React.createClass({
	render: function() {
		return (
			<div>
				<NavBar bgColor="white" titleColor="Blue" linkColor="" navData={navLinks} />
				{this.props.children}
			</div>
		);
	}
});

module.exports = BasePage;