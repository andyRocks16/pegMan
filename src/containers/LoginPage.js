import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import firebaseAuth from '../firebase/config';
import Checkbox from 'material-ui/Checkbox';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import ThemeDefault from '../theme-default';

class LoginPage extends React.Component {

  componentDidMount = () => {
    this.props.fetchTraders('http://localhost:8080/users');
  }

  loginClicked = () => {
    var id = ReactDOM.findDOMNode(this.refs.selectedTrader).value;
    var selectedUser;
    for (let user of this.props.users) {
      if (user.id === id) {
        selectedUser = user;
      }
    }
    //Firebase logic
    var reg = new RegExp(" ", "g");
    var password = id.replace(reg, "").toLowerCase()

    var email = password.concat("@gmail.com");

    let users;
    firebaseAuth().signInWithEmailAndPassword(email, password + "@123").then(function (user) {

      users = user;
      cookie.save('userDetails', user.uid, { path: '/' });
      browserHistory.push('/');
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      // ...
    });
    this.setState({ loadScreen: true });
    this.props.getUser(selectedUser);

  }
  componentWillMount = () => {
    this.Listener = firebaseAuth().onAuthStateChanged((user) => {

      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
    this.Listener();
  }

  render() {
    var users = this.props.users.map((user) => {
      return (
        <option id="traderList" key={user.id} value={user.id}>{user.name}</option>
      )
    });

    return (
      <div>
        <div id="fback">
          <div className="girisback"></div>
          <div className="kayitback"></div>
        </div>

        <div id="textbox">
          <div className="toplam">



            <div className="right">
              <div id="ic">
                <h2>Login</h2>
                <p>Synth polaroid bitters chillwave pickled. Vegan disrupt tousled.</p>
                <form name="login-form" id="girisyap sidebar-user-login" method="post" onsubmit="return false;">

                  <div className="form-group">
                    <div className="form-group">
                      <select className="form-control" id="traderNameList">
                        {users}
                      </select>
                    </div>

                  </div>
                  <Link to={`/users`}>
                    <input type="submit" value="Login" className="girisbtn" tabindex="100" />
                  </Link>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }

}


export default LoginPage;
