import { Chart } from "../chart";
export class BarChart extends Chart {
    constructor(canvas, data, options = {}) {
        super(canvas, data, {
            barWidth: 40,
            gap: 20,
            color: "steelblue",
            showValues: false,
            showLabels: false,
            ...options
        });
    }
    draw() {
        const { barWidth = 40, gap = 20, color = "steelblue", font = "12px sans-serif", textColor = "#000", textAlign = "center", textBaseline = "alphabetic", showLabels = false, showValues = false } = this.options;
        const { x, y, width, height } = this.getChartArea();
        const maxValue = Math.max(...this.data.map(d => d.value));
        // Texto
        this.ctx.font = font;
        this.ctx.fillStyle = textColor;
        this.ctx.textAlign = textAlign;
        this.ctx.textBaseline = textBaseline;
        this.data.forEach((item, index) => {
            const barHeight = (item.value / maxValue) * height;
            const barX = x + index * (barWidth + gap);
            const barY = y + height - barHeight;
            // Barra
            this.ctx.fillStyle = color;
            this.ctx.fillRect(barX, barY, barWidth, barHeight);
            // Label (debajo)
            if (showLabels) {
                this.ctx.fillStyle = textColor;
                this.ctx.fillText(item.label, barX + barWidth / 2, y + height + 12);
            }
            // Value (arriba de la barra)
            if (showValues) {
                this.ctx.fillStyle = textColor;
                this.ctx.fillText(String(item.value), barX + barWidth / 2, barY - 4);
            }
        });
    }
}
