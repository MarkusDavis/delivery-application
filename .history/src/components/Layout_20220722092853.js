import React from 'react';
import Footer from './Footer';
import { Header } from './Header';
import './Layout.css';

function Layout(props) {
    return(
        <div className="layout">
            <Header/>
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;