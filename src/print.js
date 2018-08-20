export function printMe() {
  // console.log('I get called from print.js')
  console.log('Updating print.js...')
  return 'print'
}

export function treeShaking() {
  console.log('shaking shaking')
}

console.log('The print.js module has loaded! See the network tab in dev tools...');

export default () => {
  console.log('button Clicked: here')
}