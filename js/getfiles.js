// source: https://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript

/*
var string = './sigmajs/src/renderers/webgl/sigma.core.js';
var howdy = string.replace(/sigmajs\/src\//,'');
var howdys = howdy.replace(/.js/,'');
var howdydoo = howdys.replace(/[\/\.]/g,'');
console.log(howdy);
console.log(howdydoo);
*/
var config = {
//        baseUrl: window.location.pathname.indexOf( "node-arc-d3/" ) !== -1 ? "node_modules/jquery-ui/ui/" : "../node_modules/jquery-ui/ui/",
        paths: {
                lodash: "../../lodash/lodash",
                jquery: "../external/jquery/jquery",
                external: "../external/",
//                d3sketch: "../demos/d3sketch",
                d3: "../../d3/build/d3",
//                d3: "../demos/d3.v4.min",
//                isthebest: "../demos/isthebest",
                fn_parsefile: "../../../js/libraries/fn_parsefile",
                n3lib: "../../../js/libraries/bun2-exportN3",
                jsonld: "../../jsonld/js/jsonld",
                fn_ldpsparql: "../../../js/libraries/fn_ldpsparql",
                fn_triplemodifications: "../../../js/libraries/fn_triplemodifications",
                parsetriples: "../../../js/parsetriples",
                urijs: "../../urijs/src/",
                triplemodifications: "../../../js/triplemodifications",
                createprimitives: "../../../js/createprimitives",
                d3sketch: "../../../js/d3sketch"
             //   d3: "../../d3/build/d3"
        },
        shim: {
                "external/globalize/globalize.culture.de-DE": [ "external/globalize/globalize" ],
                "external/globalize/globalize.culture.ja-JP": [ "external/globalize/globalize" ]
        }
};


console.log(config);

var dir = './sigmajs/src';

var arraydir = _getAllFilesFromFolder(dir);

console.log(arraydir);

console.log('end of arraydir');

for(i = 0; i < arraydir.length - 1; i++) {
    var string = arraydir[i];
    var howdy = string.replace(/sigmajs\/src\//,'');
    var howdys = howdy.replace(/.js/,'');
    var howdydoo = howdys.replace(/[\/\.]/g,'');
    console.log(howdydoo +' : ' + arraydir[i]);
}

arraydir.map(function(keyname) {
    let string = keyname;
    let howdy = string.replace(/sigmajs\/src\//,'');
    let howdys = howdy.replace(/.js/,'');
    let howdydoo = howdys.replace(/[\/\.]/g,'');
   return config['paths'][howdydoo] = keyname;
});


console.log(config);

function _getAllFilesFromFolder(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};
