import _ from 'lodash';
import './style.less'
import webpackPng from './webpack.png'
import {printMe} from './print'

function component() {
  console.log(process.env.NODE_ENV)
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  let myIncon = new Image()
  myIncon.src = webpackPng

  element.appendChild(myIncon)
  alert(printMe())
  return element;
}

document.body.appendChild(component());

// if(module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printME Module!')
//     printMe()
//   })
// }