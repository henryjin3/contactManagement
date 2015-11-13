const {List} = mui;

ContactList = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      contacts: Contacts.find({}).fetch()
    }
  },

  renderContacts() {
    return this.data.contacts.map((contact) => {
      return <ContactListItem key={contact._id} contact={contact} />;
    });
  },

  render() {
    return (
      <List subheader="All">
        {this.renderContacts()}
      </List>
    );
  }
});
