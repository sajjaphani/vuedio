import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import MainNav from '../MainNav';
import Modal from '../../components/Modal';
import { ViewPost } from '../';

import routes from './routes';

class AppSwitch extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  previousLocation = this.props.location;

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    );
    console.log('Inside App');
    return (
      <div>
        <MainNav />
        <Grid>
          <Switch location={isModal ? this.previousLocation : location}>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                component={route.component}
              />
            )
            )}
          </Switch>
          {isModal ?
            <Route
              path={'/posts/:id'}
              render={props => (
                <Modal
                  isOpen
                  {...props}
                  returnTo={location.state.returnTo}
                >
                  <ViewPost
                    {...props}
                  />
                </Modal>
              )
              }
            />
            :
            null
          }
        </Grid>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <Route component={AppSwitch} />
  </Router>
);

export default App;
