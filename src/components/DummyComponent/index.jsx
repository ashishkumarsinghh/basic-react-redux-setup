import React, { Component } from "react";
import { connect } from "react-redux";
import { dummy } from "../../actions/";
import store from "../../store/";

class Dummy extends Component {
  componentDidMount() {
    store.dispatch(this.props.dummyFun);
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return { dummy: state.billing.dummy };
};

const mapDispatchToProps = dispatch => {
  return { dummyFun: dispatch(dummy()) };
};

const DummyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy);
export default DummyComponent;
