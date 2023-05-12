import React from 'react';
import '../index.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {connect} from "react-redux";
import store, {history} from "../store/index";
import * as fromCounterActions from "../actions/counter";
import * as fromTodoActions from "../actions/todos";
import {WizardForm} from "./wizardForm";
import {Home} from "./home";
import reportWebVitals from "../reportWebVitals";
import {Test} from "./test";
import {NavBar} from "./navBar";


const Router = (props) => {
    return (
        <BrowserRouter history={history}>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/test" element={<Test props={props}/>}/>
                <Route exact path="/wizard" element={<WizardForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const mapStateToProps = state => ({
    counter: state.counterReducer,
    todos: state.todoReducer
})

const mapDispatchProps = dispatch => ({
    increment: () => dispatch(fromCounterActions.increment()),
    decrement: () => dispatch(fromCounterActions.decrement()),
    getTodos: () => dispatch(fromTodoActions.getTodo()),
    postTodo: (title) => dispatch(fromTodoActions.postTodo(title))
})
export default connect(mapStateToProps, mapDispatchProps)(Router);
