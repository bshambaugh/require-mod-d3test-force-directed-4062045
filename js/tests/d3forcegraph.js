var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json("createprimatives-out6.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });
   
  var linklabel = svg.append("g")
                  .attr("class","links")
                  .selectAll("text")
                  .data(graph.links)
                  .enter().append("text");

   var linklabels = linklabel
                    .text( function(d) { return d.label; })
                    .attr("font-family","sans-serif")
                    .attr("font-size","10px")
                    .attr("fill","black");


  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color(d.group); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));


   var nodelabel = svg.append("g")
                   .attr("class","nodes")
                   .selectAll("text")
                   .data(graph.nodes)
                   .enter()
                   .append("text")
                   .call(d3.drag()
                       .on("start", dragstarted)
                       .on("drag", dragged)
                       .on("end", dragended));

   var nodelabels = nodelabel
                  //  .attr("x", function(d) { return d.x; })
                  //  .attr("y", function(d) { return d.y; })
                    .text( function(d)  { return d.id; })
                    .attr("font-family","sans-serif")
                    .attr("font-size","10px")
                    .attr("fill","black");


  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    linklabels
        .attr("x", function(d) { return (d.source.x + d.target.x)/2; })
        .attr("y", function(d) { return (d.source.y + d.target.y)/2; });     
    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
   
  nodelabels
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; }) 
 }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}


