import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '../styles/FullPage.css';
import Banner from './Banner';
import Intro from './Intro';
import Footer from './Footer';


const FullPage = fullpageProps => {

    return (
        <ReactFullpage
            {...fullpageProps}
            render={({ state, fullPageApi }) => {
                return (
                    <div id="fullpage-wrapper">
                        <div className="section">
                            <Banner />
                            <Intro />
                            <Footer />
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default FullPage;