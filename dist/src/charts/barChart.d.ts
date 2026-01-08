import { Chart } from "../core/chart.js";
import type { BarChartOptions, ChartDataItem } from "../types";
export declare class BarChart extends Chart<BarChartOptions> {
    constructor(canvas: HTMLCanvasElement, data: ChartDataItem[], options?: BarChartOptions);
    protected draw(): void;
}
