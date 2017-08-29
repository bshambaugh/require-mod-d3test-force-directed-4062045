define(['d3','jquery'], function(d3,$) {

var url = 'http://localhost/require-mod-d3test-force-directed-4062045/js/createprimatives-out6.json';
$.get(url, function(graph) {
document.write(graph.nodes[0].id);

});


});
