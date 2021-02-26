import React from 'react';
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homePage/homePage.component';
import HomeShopPage from './pages/homeshoppage/homeshoppage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage.jsx';
import LearningItem from './componentsforArticlesPage/ArticlesItem/ArticlesItem';
import Contact from './pages/Contact/Contact';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props,"fffffff")
    return (
      <div>
        <Header />
        <Switch>
         
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route exact path='/ArticlesPage' component={ArticlesPage} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Learning/:item' component={LearningItem} />
          <Route exact path='/ShopPage' component={HomeShopPage} />
          <Route path='/ShopPage/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
