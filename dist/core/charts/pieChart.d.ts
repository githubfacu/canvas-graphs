import { Chart } from "../chart";
import type { PieChartOptions, ChartDataItem } from "../types";
export declare class PieChart extends Chart<PieChartOptions> {
    constructor(canvas: HTMLCanvasElement, data: ChartDataItem[], options?: PieChartOptions);
    protected draw(): void;
}
