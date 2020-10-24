var w =300;
var h = 100;
var padding = 2;
var dataset = [5, 10, 15, 20, 25]
var c = ("fill", "red")
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style( "fill", c )

svg.selectAll("rect")
    .data(dataset)
    .enter().append("rect")
    .attr("x", function (d, i) {
        return i * (w/ dataset.length);
    })
    .attr("y", function (d) {
        return h - (d * 4);
    })
    .attr("width", w / dataset.length -padding)
    .attr("height", function (d){
        return (d * 4);
    });


// d3.select("body")
//     .append("svg")
//     .append("rect")
//     .attr("width", 50)
//     .attr("height", 200)
//     .style("fill", "lightblue")
//
// d3.select("body")
//     .append("svg")
//     .attr("width", 50)
//     .attr("height", 50)
//     .append("circle")
//     .attr("cx", 25)
//     .attr("cy", 25)
//     .attr("r", 25)
//     .style("fill", "purple")
//
// d3.select("body")
//     .append("svg")
//     .attr("width", 250)
//     .attr("height", 50)
//     .append("text")
//     .text("Easy Peasy")
//     .attr("y", 25)
//     .attr("x", 25)
//     .style("fill", "blue")


// const lineData = [
//     {"x": 1, "y": 5},
//     {"x": 20, "y": 20},
//     {"x": 40, "y": 10},
//     {"x": 60, "y": 40},
//     {"x": 80, "y": 5},
//     {"x": 100, "y": 60}];

//    //This is the accessor function we talked about above-->
// const lineFunction = d3.svg.line().x(function (d) {
//     return d.x;
// }).y(function (d) {
//     return d.y;
// }).interpolate("linear");
//
// //The SVG Container-->
// const svgContainer = d3.select("body").append("svg").attr("width", 200).attr("height", 200);
//
// //The line SVG Path we draw-->
// const lineGraph = svgContainer.append("path").attr("d", lineFunction(lineData)).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none");
//

