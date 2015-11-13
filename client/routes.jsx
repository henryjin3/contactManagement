const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

const routes = (
  <Route path="/" component={App}>
    <Route path="add" component={AddContact} />
    <IndexRoute component={ContactList} />
  </Route>
);

const router = (
  <Router history={createHistory()}>
    {routes}
  </Router>
);

Meteor.startup(function () {
  ReactDOM.render(router, document.getElementById("app"));
});
