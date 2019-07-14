import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
	return(
		<div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn btn-primary"
      				onClick={dec}>DEC</button>
      <button className="btn btn-primary"
      				onClick={inc}>INC</button>
      <button className="btn btn-primary"
      				onClick={rnd}>RND</button>
    </div>
	);
};

const mapStateToProps = (state) => {  //функция принимает на вход состяние из store
  return {
    counter: state,             //возвращает объект с состоянием и названием состояния
  }
};

export default connect(mapStateToProps, actions)(Counter);