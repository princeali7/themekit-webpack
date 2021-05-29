import $ from 'jquery-slim-webpack';

import './utils.scss';
import './top-bar.scss';
import './moxie-header.scss';
import './mega-menu.scss';
 
const Sticky = require('sticky-js');

// Testing arrow functions
const MoxieHeader = () => {
    $(() => {
        const sticky = new Sticky('.make-stick-top');

        console.log('JQuery Ready now');
    }); 
};
MoxieHeader();

// Check if HMR interface is enabled
if (module.hot) {
    // Accept hot update
    console.log('testing hmr');
    module.hot.accept();
}
