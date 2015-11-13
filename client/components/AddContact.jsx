const {
  TextField,
  DatePicker,
  RaisedButton
} = mui;

AddContact = React.createClass({
  getInitialState() {
    return {
      firstNameError: null
    };
  },

  handleSubmit(event) {
    event.preventDefault();

    const firstName = this.refs.firstNameInput.getValue().trim();
    const lastName = this.refs.lastNameInput.getValue().trim();
    const title = this.refs.titleInput.getValue().trim();
    const hireDate = this.refs.hireDateInput.getDate();

    // Contacts.insert({
    //   firstName: firstName,
    //   lastName: lastName,
    //   title: title,
    //   hireDate: hireDate,
    //   createdAt: new Date()
    // });
  },

  validateInput(event) {
    const firstName = this.refs.firstNameInput.getValue().trim();
    const lastName = this.refs.lastNameInput.getValue().trim();
    const title = this.refs.titleInput.getValue().trim();
    const hireDate = this.refs.hireDateInput.getDate();

    const requiredErrorText = "This field is required";
    if(!firstName || firstName === "") {
      this.setState({
        firstNameError: requiredErrorText
      });
    } else {
      this.setState({
        firstNameError: null
      });
    }
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          ref="firstNameInput"
          floatingLabelText="First Name"
          errorText={this.state.firstNameError}
          onChange={this.validateInput} />
        <TextField
          ref="lastNameInput"
          floatingLabelText="Last Name" />
        <TextField
          ref="titleInput"
          floatingLabelText="Title" />
        <DatePicker ref="hireDateInput"
          floatingLabelText="Hire Date"
          autoOk={true} />
        <RaisedButton label="Cancel"/>
        <RaisedButton label="Add" primary={true} onClick={this.handleSubmit}/>
      </form>
    );
  }
});
