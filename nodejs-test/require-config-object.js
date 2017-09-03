var dir = './test';

var arraydir = _getAllFilesFromFolder(dir);

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
} 

console.log('the total object is:'+'\n');
console.log(config);
console.log('the shim is:'+'\n');
console.log(config.shim);
console.log('the paths are:'+'\n');
console.log(config.paths);
console.log(config.paths.d3);

console.log(arraydir.length);

/*
for (i = 0; i < arraydir.length -1; i++) {
   console.log(arraydir[i]);
   let keyname = 'element'+i;
   console.log(keyname);
   config['paths'][keyname] = arraydir[i];
}
*/

/*
config.paths.element1 = arraydir[0];
config.paths.element2 = arraydir[1];
config.paths.element3 = arraydir[2];
*/
//config.path.element4 = arraydir[3];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});

arraydir.map(function(keyname) {
   return config['paths']['element'+keyname] = keyname;
});

console.log(doubles);

console.log(config.paths);

console.log(config);
