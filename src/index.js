import _ from 'lodash';
import './style.less'
import webpackPng from './webpack.png'
// import {printMe} from './print'

function component() {
  console.log(process.env.NODE_ENV)
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  let myIncon = new Image()
  myIncon.src = webpackPng
  let button = document.createElement('button')
  button.innerHTML = 'clickMe'
  button.onclick = e => import(/* webpackChunkName: "print"*/'./print').then(module => {
    var print = module.default
    print()
  })
  element.appendChild(myIncon)
  element.appendChild(button)
  // alert(printMe())
  return element;
}

document.body.appendChild(component());

// if(module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printME Module!')
//     printMe()
//   })
// }