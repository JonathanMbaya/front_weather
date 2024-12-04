import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const ScatterPlot = ({ scatterdata }) => {
  const svgRef = useRef();
  const containerRef = useRef(); // Ref pour le conteneur parent
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = containerRef.current
        ? containerRef.current.offsetWidth
        : 600;
      const height = Math.min(400, width * 0.6); // Maintenir un ratio 3:2
      setDimensions({ width, height });
    };

    // Mettre à jour les dimensions initialement et lors des redimensionnements
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous drawings

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
      .data(scatterdata)
      .join("circle")
      .attr("cx", (d) => xScale(d.precipitation))
      .attr("cy", (d) => yScale(d.windSpeed))
      .attr("r", 5)
      .attr("fill", (d) => colorScale(d.temperature));
  }, [scatterdata, dimensions]);

  return (
    <div ref={containerRef} style={{ width: "100%", maxWidth: "600px" }}>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height}></svg>
    </div>
  );
};

export default ScatterPlot;
