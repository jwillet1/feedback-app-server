import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <div>
            <li>
              <a href="#">Add Credits</a>
            </li>
            <li>
              <a href="#">Credits: 5</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);