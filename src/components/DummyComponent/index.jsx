import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { dummy } from "../../actions/";

class Dummy extends Component {
  componentDidMount() {
    this.props.dummyFun("Hello India");
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return { dummy: state.billing.dummy };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ dummyFun: message => dummy(message) }, dispatch);
};

const DummyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy);
export default DummyComponent;
