import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LineChart = ({ linedata }) => {
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
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous drawings

    // Scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(linedata, (d) => new Date(d.year)))
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(linedata, (d) => d.temperature)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Axes
    const xAxis = (g) =>
      g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0));

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .call((g) => g.select(".domain").remove());

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    // Line generator
    const line = d3
      .line()
      .x((d) => xScale(new Date(d.year)))
      .y((d) => yScale(d.temperature));

    svg
      .append("path")
      .datum(linedata)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }, [linedata, dimensions]);

  return (
    <div ref={containerRef} style={{ width: "100%", maxWidth: "600px" }}>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height}></svg>
    </div>
  );
};

export default LineChart;
