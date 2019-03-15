import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class Friends extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
      console.log(this.props.friends)
    return (
      <div className="friends-list">
        Friends
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingData }) => ({
  friends,
  fetchingData
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Friends)
);