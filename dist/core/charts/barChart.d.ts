import { Chart } from "../chart";
import type { BarChartOptions, ChartDataItem } from "../types";
export declare class BarChart extends Chart<BarChartOptions> {
    constructor(canvas: HTMLCanvasElement, data: ChartDataItem[], options?: BarChartOptions);
    protected draw(): void;
}
