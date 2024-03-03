import React from "react";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

function HomeAdmi() {
  const chartContainerRef = useRef();

  useEffect(() => {
    // Datos falsos para cada gráfico
    const barChartData = [30, 50, 80, 120, 200];
    const lineChartData = [10, 30, 40, 80, 60];
    const areaChartData = [10, 30, 40, 80, 60];
    const pieChartData = [30, 50, 80, 120, 200];
    const scatterPlotData = [
      { x: 30, y: 40 },
      { x: 80, y: 120 },
      { x: 120, y: 80 },
      { x: 200, y: 160 },
      { x: 250, y: 200 },
    ];
    d3.select(chartContainerRef.current).selectAll('*').remove();

    // Configuración común para todos los gráficos
    const width = 400;
    const height = 200;

    // Bar Chart
    const barXScale = d3
      .scaleBand()
      .domain(barChartData.map((d, i) => i))
      .range([0, width])
      .padding(0.1);
    const barYScale = d3
      .scaleLinear()
      .domain([0, d3.max(barChartData)])
      .range([height, 0]);

    const barSvg = d3
      .select(chartContainerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    barSvg
      .selectAll("rect")
      .data(barChartData)
      .enter()
      .append("rect")
      .attr("x", (d, i) => barXScale(i))
      .attr("y", (d) => barYScale(d))
      .attr("width", barXScale.bandwidth())
      .attr("height", (d) => height - barYScale(d))
      .attr("fill", "#16697A")
      .attr("rx", 8)
      .attr("ry", 8);

    barSvg
      .selectAll("text")
      .data(barChartData)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => barXScale(i) + barXScale.bandwidth() / 2)
      .attr("y", (d) => barYScale(d) - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "black");

    // Line Chart
    const lineXScale = d3
      .scaleLinear()
      .domain([0, lineChartData.length - 1])
      .range([0, width]);
    const lineYScale = d3
      .scaleLinear()
      .domain([0, d3.max(lineChartData)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => lineXScale(i))
      .y((d) => lineYScale(d));

    const lineSvg = d3
      .select(chartContainerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    lineSvg
      .append("path")
      .datum(lineChartData)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "#16697A");

    lineSvg
      .selectAll("text")
      .data(lineChartData)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => lineXScale(i))
      .attr("y", (d) => lineYScale(d) - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "black");

    // Area Chart
    const areaXScale = d3
      .scaleLinear()
      .domain([0, areaChartData.length - 1])
      .range([0, width]);
    const areaYScale = d3
      .scaleLinear()
      .domain([0, d3.max(areaChartData)])
      .range([height, 0]);

    const area = d3
      .area()
      .x((d, i) => areaXScale(i))
      .y0(height)
      .y1((d) => areaYScale(d));

    const areaSvg = d3
      .select(chartContainerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    areaSvg
      .append("path")
      .datum(areaChartData)
      .attr("d", area)
      .attr("fill", "#16697A");

    areaSvg
      .selectAll("text")
      .data(areaChartData)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => areaXScale(i))
      .attr("y", (d) => areaYScale(d) - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "black");

    // Pie Chart
    const pieColorScale = d3
      .scaleOrdinal()
      .range(["#16697A", "#67a9cf", "#3690c0", "#02818a", "#016450"]);
    const pie = d3.pie();

    const pieSvg = d3
      .select(chartContainerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    pieSvg
      .selectAll("path")
      .data(pie(pieChartData))
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(0)
          .outerRadius(Math.min(width, height) / 2 - 10)
      )
      .attr("fill", (d) => pieColorScale(d.data));

      pieSvg
  .selectAll("text")
  .data(pie(pieChartData))
  .enter()
  .append("text")
  .text((d) => `${d.data} (${d.value}%)`)
  .attr("transform", (d) => {
    const pos = d3.arc().centroid(d);
    const midAngle = Math.atan2(pos[1], pos[0]);
    const x = Math.sin(midAngle) * (Math.min(width, height) / 2 - 10);
    const y = -Math.cos(midAngle) * (Math.min(width, height) / 2 - 10);
    return `translate(${x},${y})`;
  })
  .attr("text-anchor", (d) => {
    // Ajusta el ancla del texto para que se alinee con el borde del círculo
    return (d.startAngle + d.endAngle) / 2 < Math.PI ? "start" : "end";
  })
  .attr("fill", "black");

    // Scatter Plot
    const scatterXScale = d3
      .scaleLinear()
      .domain([0, d3.max(scatterPlotData, (d) => d.x)])
      .range([0, width]);
    const scatterYScale = d3
      .scaleLinear()
      .domain([0, d3.max(scatterPlotData, (d) => d.y)])
      .range([height, 0]);

    const scatterSvg = d3
      .select(chartContainerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    scatterSvg
      .selectAll("circle")
      .data(scatterPlotData)
      .enter()
      .append("circle")
      .attr("cx", (d) => scatterXScale(d.x))
      .attr("cy", (d) => scatterYScale(d.y))
      .attr("r", 5)
      .attr("fill", "#16697A");

    scatterSvg
      .selectAll("text")
      .data(scatterPlotData)
      .enter()
      .append("text")
      .text((d) => `(${d.x}, ${d.y})`)
      .attr("x", (d) => scatterXScale(d.x) + 10)
      .attr("y", (d) => scatterYScale(d.y))
      .attr("fill", "#16697A");

  }, []);

  return <div ref={chartContainerRef} className="grid grid-cols-2  justify-around w-auto"></div>;
}

export default HomeAdmi;
