// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

var string = './sigmajs/src/renderers/webgl/sigma.core.js';
var howdy = string.replace(/sigmajs\/src\//,'');
var howdys = howdy.replace(/.js/,'');
var howdydoo = howdys.replace(/[\/\.]/g,'');
console.log(howdy);
console.log(howdydoo);
