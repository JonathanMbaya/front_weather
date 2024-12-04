import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ScatterPlot = ({ scatterdata }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous drawings

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    // Scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(scatterdata, (d) => d.precipitation)])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(scatterdata, (d) => d.windSpeed)])
      .range([height - margin.bottom, margin.top]);

    const colorScale = d3
      .scaleSequential(d3.interpolateCool)
      .domain([0, d3.max(scatterdata, (d) => d.temperature)]);

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Points
    svg
      .append("g")
      .selectAll("circle")
      .scatterdata(scatterdata)
      .join("circle")
      .attr("cx", (d) => xScale(d.precipitation))
      .attr("cy", (d) => yScale(d.windSpeed))
      .attr("r", 5)
      .attr("fill", (d) => colorScale(d.temperature));
  }, [scatterdata]);

  return <svg ref={svgRef} width={600} height={400}></svg>;
};

export default ScatterPlot;
