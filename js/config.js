// config.js

requirejs.config({
    baseUrl : 'js',
    paths : {
         d3 : 'libraries/d3',
         jquery: 'libraries/jquery-3.1.1.min',
         sigma: 'node_modules/sigma/build/sigma.require'
    },
    shim: { 'sigma' : { exports: 'sigma' } }
});

/*
require(["d3"], function(d3) {
  console.log(d3.version);
});
*/
