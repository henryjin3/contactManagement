const {AppBar} = mui;
const {List} = mui;

// App component - represents the whole app
App = React.createClass({
  getContacts() {
    return [
      { _id: 1, text: "Contact 1" },
      { _id: 2, text: "Contact 2" },
      { _id: 3, text: "Contact 3" }
    ];
  },

  renderContacts() {
    return this.getContacts().map((contact) => {
      return <Contact key={contact._id} contact={contact} />;
    });
  },

  render() {
    return (
      <div className="app">
        <AppBar title="Contacts"/>
        <List subheader="All">
          {this.renderContacts()}
        </List>
      </div>
    );
  }
});
