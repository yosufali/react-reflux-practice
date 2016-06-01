var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');
var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var EmailStore = require('../../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({
	mixins:[Reflux.listenTo(EmailStore, 'onChange')],

	onChange: function(msg) {
		console.log(msg);
		//TODO: handle requwst failing
		this.setState({submitted:true});
	},

	getInitialState: function() {
		return {submitted: false};
	},

	onSubmit: function (e) {
		if (!this.refs.fieldEmail.state.valid) {
			alert("Email is always required! :)")
		} else {
			// Send request to email server
			var subscriber = {
				email: this.refs.fieldEmail.state.value,
				firstName: this.refs.fieldName.state.value
			};

			this.refs.fieldEmail.clear();
			this.refs.fieldName.clear();

			//Triggering the needed action
			Actions.submitEmail(subscriber);
		}
	},

	render: function() {

		var successStyle = {
			color: "green",
			visibility: this.state.submitted ? "visible" : "hidden"
		}


		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h4> Sign up for the newsletter </h4>
					</div>
					<div className="panel-body">
						<NameField type="First" ref="fieldName" />
						<br />
						<EmailField ref="fieldEmail"/>
						<div className="row">
							<div className="col-sm-6">
								<button className="btn btn-primary" onClick={this.onSubmit}> Submit </button>
							</div>
							<div className="col-sm-2">
								<h5 style={successStyle}> Succuess! </h5>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LeadCapture;