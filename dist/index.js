import { BarChart } from "./charts/barChart.js";
import { PieChart } from "./charts/pieChart.js";
const canvas = document.getElementById("canvas-bars");
const canvasPie = document.getElementById("canvas-pie");
const BARWIDTH = 60;
const GAP = 32;
const data = [
    { label: "Pasta", value: 580 },
    { label: "Pizza", value: 50 },
    { label: "Camarones", value: 80 },
    { label: "Milanesa", value: 40 },
    { label: "Papas Fritas", value: 240 },
    { label: "Tortilla", value: 60 },
    { label: "Mariscos", value: 90 },
];
const chartWidth = (data.length * BARWIDTH) + (data.length - 1) * GAP + 64;
const chart = new BarChart(canvas, data, {
    width: chartWidth,
    height: 500,
    barWidth: BARWIDTH,
    gap: GAP,
    backgroundColor: '#ffc3c3ff',
    showLabels: true,
    showValues: true,
});
const pieColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#C9CBCF"
];
const pieChart = new PieChart(canvasPie, data, {
    width: 500,
    height: 300,
    showLabels: true,
    showPercentages: true,
    colors: pieColors,
    backgroundColor: '#ffc3c3ff',
});
chart.render();
pieChart.render();
