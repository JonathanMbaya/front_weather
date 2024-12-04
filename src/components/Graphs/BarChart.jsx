import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BarChart = ({ bardata }) => {
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
      .scaleBand()
      .domain(bardata.map((d) => d.month))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(bardata, (d) => d.temperature)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Bars
    svg
      .append("g")
      .selectAll("rect")
      .data(bardata)
      .join("rect")
      .attr("x", (d) => xScale(d.month))
      .attr("y", (d) => yScale(d.temperature))
      .attr("height", (d) => yScale(0) - yScale(d.temperature))
      .attr("width", xScale.bandwidth())
      .attr("fill", "orange");
  }, [bardata, dimensions]);

  return (
    <div ref={containerRef} style={{ width: "100%", maxWidth: "600px" }}>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height}></svg>
    </div>
  );
};

export default BarChart;
