const {ListItem} = mui;
Contact = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    contact: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <ListItem primaryText={this.props.contact.text}/>
    );
  }
});
