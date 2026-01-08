import { Chart } from "../core/chart.js";
export class PieChart extends Chart {
    constructor(canvas, data, options = {}) {
        super(canvas, data, {
            startAngle: -Math.PI / 2,
            showLabels: true,
            showPercentages: true,
            ...options
        });
    }
    draw() {
        const { radius, colors = [], startAngle = -Math.PI / 2, font = "12px sans-serif", textColor = "#000", showLabels = true, showPercentages = true } = this.options;
        const { x, y, width, height } = this.getChartArea();
        const cx = x + width / 2;
        const cy = y + height / 2;
        const r = radius ?? Math.min(width, height) / 2;
        const total = this.data.reduce((s, d) => s + d.value, 0);
        let angle = startAngle;
        this.ctx.font = font;
        this.ctx.fillStyle = textColor;
        this.ctx.textBaseline = "middle";
        this.data.forEach((item, index) => {
            const sliceAngle = (item.value / total) * Math.PI * 2;
            const endAngle = angle + sliceAngle;
            // Slice
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.arc(cx, cy, r, angle, endAngle);
            this.ctx.closePath();
            this.ctx.fillStyle = colors[index % colors.length] ?? "#ccc";
            this.ctx.fill();
            // Label + percentage outside
            if (showLabels || showPercentages) {
                const midAngle = angle + sliceAngle / 2;
                const x1 = cx + Math.cos(midAngle) * r;
                const y1 = cy + Math.sin(midAngle) * r;
                const x2 = cx + Math.cos(midAngle) * (r + 12);
                const y2 = cy + Math.sin(midAngle) * (r + 12);
                const isRightSide = Math.cos(midAngle) >= 0;
                const xText = x2 + (isRightSide ? 6 : -6);
                const yText = y2;
                this.ctx.strokeStyle = "#555";
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);
                this.ctx.stroke();
                this.ctx.textAlign = isRightSide ? "left" : "right";
                this.ctx.fillStyle = textColor;
                let text = "";
                if (showLabels)
                    text += item.label;
                if (showPercentages) {
                    const pct = ((item.value / total) * 100).toFixed(1) + "%";
                    text += showLabels ? ` (${pct})` : pct;
                }
                this.ctx.fillText(text, xText, yText);
            }
            angle = endAngle;
        });
    }
}
