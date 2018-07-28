import _ from 'lodash';
import './style.less'
import webpackPng from './webpack.png'
import printMe from './print'

function component() {
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