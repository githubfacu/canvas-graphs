import { BarChart } from "../src/charts/barChart.js";
import { PieChart } from "../src/charts/pieChart.js";
const canvas = document.getElementById("canvas-bars");
const canvasPie = document.getElementById("canvas-pie");
const data = [
    { label: "Pasta", value: 380 },
    { label: "Pizza", value: 50 },
    { label: "Camarones", value: 80 },
    { label: "Milanesa", value: 40 },
    { label: "Papas Fritas", value: 240 },
    { label: "Tortilla", value: 60 },
    { label: "Mariscos", value: 90 },
];
const chart = new BarChart(canvas, data, {
    width: 800,
    height: 500,
    barWidth: 60,
    gap: 32,
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
document.getElementById("random").addEventListener("click", () => {
    const newData = data.map(item => ({
        ...item,
        value: Math.floor(Math.random() * 300)
    }));
    chart.updateData(newData);
    pieChart.updateData(newData);
});
function readDataFromJSON(textareaId) {
    const textarea = document.getElementById(textareaId);
    if (!textarea)
        return [];
    try {
        const parsed = JSON.parse(textarea.value);
        if (!Array.isArray(parsed))
            return [];
        return parsed
            .filter(item => typeof item.label === "string")
            .map(item => ({
            label: item.label,
            value: Number(item.value),
        }))
            .filter(item => !Number.isNaN(item.value));
    }
    catch (err) {
        console.error("error parse data textarea", err);
        return [];
    }
}
document.getElementById("apply-bar-data").addEventListener("click", () => {
    const newData = readDataFromJSON('bar-json');
    chart.updateData(newData);
});
document.getElementById("apply-pie-data").addEventListener("click", () => {
    const newData = readDataFromJSON('pie-json');
    pieChart.updateData(newData);
});
