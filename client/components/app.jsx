const {AppBar} = mui;

// App component - represents the whole app
App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      contacts: Contacts.find({}).fetch()
    }
  },

  renderContacts() {
    return this.data.contacts.map((contact) => {
      return <Contact key={contact._id} contact={contact} />;
    });
  },

  render() {
    return (
      <div className="app">
        <AppBar title="Contacts"/>
        {this.props.children}
      </div>
    );
  }
});
