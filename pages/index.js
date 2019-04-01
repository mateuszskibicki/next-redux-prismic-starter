import { connect } from "react-redux"
import { MainLayout } from '../components/layout/MainLayout'
import { setFake1 } from '../global-state/actions/fakeAction';
import { setFake2 } from '../global-state/actions/fakeAction';
import { Link } from '../server/next-routes/routesFrontEnd'
class Homepage extends React.Component {

    static async getInitialProps({store, isServer, pathname, query}) {
    
        // // lets create an action using creator
        // const action = someAsyncAction();
        
        // // now the action has to be dispatched
        // store.dispatch(action);
        
        // // once the payload is available we can resume and render the app
        // return action.payload.then((payload) => {
        //     // you can do something with payload now
        //     return {custom: 'custom'}; 
        // });

        const action = await setFake2()
        await store.dispatch(action)
        return store
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
    }

    setFakeState = () => {
        this.props.setFake1('Changed state from null to this value')
    }

    render() {
        //console.log(this.props)
        return (
            <MainLayout>
                <h1>Check your redux state and console</h1>
                <button onClick={this.setFakeState} className="btn btn-secondary">change state</button>
                <Link route="/second"><button>Go to second page</button></Link>
            </MainLayout>
        )
    }
}

const mapStateToProps = state => ({
	fake: state
});

const mapDispatchToProps = (dispatch) => ({
    setFake1: (arg) => {dispatch(setFake1(arg))},
    setFake2: () => {dispatch(setFake2())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)


// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import Prismic from 'prismic-javascript';
// import { PrismicConfig } from '../prismic-config/PrismicAPI';
// import dynamic from 'next/dynamic';

// import { layoutHelper } from "../helpers/LayoutHelpers";
// import { homepageHelper } from '../helpers/HomepageHelpers';
// import { testimonialsHelper } from '../helpers/TestimonialsHelpers';
// import { theDailyJournalHelper } from '../helpers/TheDailyJounalHelpers';

// import { MainLayout } from '../features/layout/MainLayout';
// import { HomePage } from '../templates/homepage/HomePage';
// //const HomePage = dynamic(() => import("../templates/homepage/HomePage"));

// class Index extends Component {

//     static async getInitialProps() {
//         try {
//             const res = await Prismic.api(PrismicConfig.apiEndpoint, { accessToken: PrismicConfig.apiAccessTokes });
//             const json = await Promise.all([
//                 res.query(Prismic.Predicates.at('document.type', 'layout')),
//                 res.query(Prismic.Predicates.at('document.type', 'homepage')),
//                 res.query(Prismic.Predicates.at('document.type', 'testimonials')),
//                 res.query(Prismic.Predicates.at('document.type', 'the-daily-journal'))
//             ]);
//             let newProps = {
//                 ...layoutHelper(json[0]),
//                 ...homepageHelper(json[1]),
//                 ...testimonialsHelper(json[2]),
//                 ...theDailyJournalHelper(json[3]),
//             }
//             return newProps;
//         }
//         catch (err) {
//             return { error: true }
//         }
//     };

//     componentDidMount() {
//         this.props.error && (window.location = '/404')
//     }

//     render() {
//         const {
//             navbar,
//             footer,
//             header,
//             transofrming,
//             testimonials,
//             magazine,
//             theDailyJournal,
//             testimonials_tag,
//             SEO,
//             error
//         } = this.props;

//         if (error) return '';

//         return (
//             <MainLayout 
//                 navbar={navbar} 
//                 footer={footer} 
//                 SEO={SEO}
//             >
//                 <HomePage 
//                     header={header}
//                     transofrming={transofrming}
//                     testimonials={testimonials}
//                     magazine={magazine}
//                     theDailyJournal={theDailyJournal}
//                     testimonials_tag={testimonials_tag}
//                 />
//             </MainLayout>
//         )
//     }
// }

// Index.propTypes = {
//     header: PropTypes.object,
//     SEO: PropTypes.object,
//     transofrming: PropTypes.object,
//     testimonials: PropTypes.object,
//     magazine: PropTypes.object,
//     theDailyJournal: PropTypes.object,
//     navbar: PropTypes.object,
//     footer: PropTypes.object,
//     testimonials_tag: PropTypes.string,
//     error: PropTypes.bool
// }

// export default Index;