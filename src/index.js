import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <App/> 
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();


// document.querySelector("li.courses").addEventListener("click", function () {
//   document.querySelector("nav.courses").classList.toggle('noDisplay');
//   console.log('clicked!');

//   if (!document.querySelector("nav.howitworks").classList.contains('noDisplay')) {
//     document.querySelector("nav.howitworks").classList.toggle('noDisplay');
//   }

// });

// document.querySelector("li.howitworks").addEventListener("click", function () {
//   document.querySelector("nav.howitworks").classList.toggle('noDisplay');

//   if (!document.querySelector("nav.courses").classList.contains('noDisplay')) {
//     document.querySelector("nav.courses").classList.toggle('noDisplay');
//   }
//   console.log('clicked! 2');
// });


// document.querySelector("div.hamburger").addEventListener("click", function () {
//   document.querySelector("li.courses").classList.toggle('noDisplay');
//   console.log('clicked!');  

//   if (!document.querySelector("nav.courses").classList.contains('noDisplay')) {
//     document.querySelector("nav.courses").classList.toggle('noDisplay');
//   }
  
//   document.querySelector("li.howitworks").classList.toggle('noDisplay');
//   console.log('clicked!');  

//   if (!document.querySelector("nav.howitworks").classList.contains('noDisplay')) {
//     document.querySelector("nav.howitworks").classList.toggle('noDisplay');
//   }
  
//   document.querySelector("li.reviews").classList.toggle('noDisplay');
//   console.log('clicked!');

//   document.querySelector("li.pricing").classList.toggle('noDisplay');
//   console.log('clicked!');

//   document.querySelector("li.signin").classList.toggle('noDisplay');
//   console.log('clicked!');

// });