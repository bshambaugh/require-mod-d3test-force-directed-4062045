define(['sigma'], function(sigma) {
sigma = sigma || window.sigma;

/**
 * Just a simple example to show how to use the sigma.layout.noverlap
 * plugin:
 *
 * A random graph is generated. Noverlap is then run.
 */


var  g = {
      nodes: [],
      edges: []
    };

g.nodes.push({"id":"\"0.0 (time to maturity pulled ...","group":1,"label":"\"0.0 (time to maturity pulled ...","x":0.17598106161778382,"y":0.8492444041293928,"size":0.3432609412593943,"color":"#666"},{"id":"\"0.0(investment cost pulled fr...","group":1,"label":"\"0.0(investment cost pulled fr...","x":0.9124495549410551,"y":0.9042845332261443,"size":0.12853135726276466,"color":"#666"},{"id":"\"Food Growing Methods\"","group":1,"label":"\"Food Growing Methods\"","x":0.7657770854871537,"y":0.4410881254848652,"size":0.8878322178764051,"color":"#666"},{"id":"\"For independence and resource...","group":1,"label":"\"For independence and resource...","x":0.07277298998042392,"y":0.4926457798219849,"size":0.34065245460188387,"color":"#666"},{"id":"\"Health and Medicine\"","group":1,"label":"\"Health and Medicine\"","x":0.6399064327648696,"y":0.20277199717188132,"size":0.7862526653272293,"color":"#666"},{"id":"\"Research\"","group":1,"label":"\"Research\"","x":0.3469404373220457,"y":0.964557116900127,"size":0.22292908053291138,"color":"#666"},{"id":"base5:old-Food-Growing-Methods.ttl","group":1,"label":"base5:old-Food-Growing-Methods.ttl","x":0.05742216958919788,"y":0.04051981949022099,"size":0.0790280204149264,"color":"#666"},{"id":"ns1:biological-support","group":1,"label":"ns1:biological-support","x":0.3730998216510978,"y":0.21678899563638432,"size":0.2608177391837013,"color":"#666"},{"id":"ns1:habitation-infrastructure","group":1,"label":"ns1:habitation-infrastructure","x":0.1426740740627025,"y":0.09690273976164943,"size":0.38535120725946825,"color":"#666"});

g.edges.push({"id":0,"source":"base5:old-Food-Growing-Methods.ttl","target":"\"Food Growing Methods\"","value":1,"label":"dcterms:title","size":0.42923980541389195,"color":"#ccc","type":"curve"},{"id":1,"source":"base5:old-Food-Growing-Methods.ttl","target":"\"For independence and resource...","value":1,"label":"rdfs:comment","size":0.2727967947004837,"color":"#ccc","type":"curve"},{"id":2,"source":"base5:old-Food-Growing-Methods.ttl","target":"\"0.0(investment cost pulled fr...","value":1,"label":"lsi:averageEstInvestmentCost","size":0.429834585331091,"color":"#ccc","type":"curve"},{"id":3,"source":"base5:old-Food-Growing-Methods.ttl","target":"\"0.0 (time to maturity pulled ...","value":1,"label":"lsi:averageEstTimetoMaturity","size":0.013554215214092391,"color":"#ccc","type":"curve"},{"id":4,"source":"base5:old-Food-Growing-Methods.ttl","target":"\"Research\"","value":1,"label":"lsi:commercialStatus","size":0.7948292755390035,"color":"#ccc","type":"curve"},{"id":5,"source":"base5:old-Food-Growing-Methods.ttl","target":"\"Health and Medicine\"","value":1,"label":"lsi:relatedIndustriesFields","size":0.7889998020543219,"color":"#ccc","type":"curve"},{"id":6,"source":"base5:old-Food-Growing-Methods.ttl","target":"ns1:biological-support","value":1,"label":"lsi:label","size":0.2610617602970494,"color":"#ccc","type":"curve"},{"id":7,"source":"base5:old-Food-Growing-Methods.ttl","target":"ns1:habitation-infrastructure","value":1,"label":"lsi:label","size":0.4162804189832333,"color":"#ccc","type":"curve"});


// Instantiate sigma:
s = new sigma({
  graph: g,
  renderer: {
    container: document.getElementById('graph-container'),
    type: 'canvas'
  },
  settings: {
    edgeLabelSize: 'proportional',
    minNodeSize: 4,
    maxNodeSize: 8,
    minEdgeSize: 1,
    maxEdgeSize: 1,
    labelThreshold: 1
  }
});


// Configure the noverlap layout:
/*
var noverlapListener = s.configNoverlap({
  nodeMargin: 0.1,
  scaleNodes: 1.05,
  gridSize: 75,
  easing: 'quadraticInOut', // animation transition function
  duration: 10000   // animation duration. Long here for the purposes of this example only
});
// Bind the events:
noverlapListener.bind('start stop interpolate', function(e) {
  console.log(e.type);
  if(e.type === 'start') {
    console.time('noverlap');
  }
  if(e.type === 'interpolate') {
    console.timeEnd('noverlap');
  }
});
// Start the layout:
s.startNoverlap();
*/
});
