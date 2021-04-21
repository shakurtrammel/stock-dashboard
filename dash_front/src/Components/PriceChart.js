import React, { useEffect } from 'react';
import * as d3 from 'd3';



const drawChart = (width, height) => {
    d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
        .append("text")
        .attr("fill", "white")
        .attr("x", 50)
        .attr("y", 50)
        .text("Hello D3")
}

const PriceChart = () => {
    useEffect( () => { drawChart(200, 200)}, []);
    return (
        <div>
            <div id="chart"></div>
        </div>
    );
}

export default PriceChart;