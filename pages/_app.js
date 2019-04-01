import React from "react";
import App, { Container } from "next/app";

// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import withRedux from "next-redux-wrapper";
import reducers from '../global-state/reducers';

const middleware = [thunk];

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const makeStore = (initialState, options) => {
    return createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
};

export default withRedux(makeStore, {debug: false})(class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
            }
        };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

});






// // pages/_app.js
// import React from 'react'
// import {Provider} from "react-redux";
// import App, {Container} from "next/app";
// import withRedux from "next-redux-wrapper";
// //import {makeStore} from "../components/store";

// const makeStore = (initialState, options) => {
//     return createStore(
//         reducers,
//         initialState,
//         compose(
//             applyMiddleware(...middleware)
//             //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     );
// };

// export default withRedux(makeStore, {debug: true})(class MyApp extends App {

//     static async getInitialProps({Component, ctx}) {
//         return {
//             pageProps: {
//                 // Call page-level getInitialProps
//                 ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
//             }
//         };
//     }

//     render() {
//         const {Component, pageProps, store} = this.props;
//         return (
//             <Container>
//                 <Provider store={store}>
//                     <Component {...pageProps} />
//                 </Provider>
//             </Container>
//         );
//     }

// });