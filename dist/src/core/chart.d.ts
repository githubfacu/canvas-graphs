import { ChartDataItem, ChartOptions } from "../types";
export type ChartArea = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare abstract class Chart<T extends ChartOptions> {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected data: ChartDataItem[];
    protected options: T;
    constructor(canvas: HTMLCanvasElement, data: ChartDataItem[], options: T);
    /** Limpia todo el canvas */
    protected clear(): void;
    /** Dibuja el fondo del canvas */
    protected drawBackground(): void;
    /** Área lógica donde se debe dibujar el chart */
    protected getChartArea(): ChartArea;
    render(): void;
    updateData(data: ChartDataItem[]): void;
    updateOptions(options: Partial<T>): void;
    protected abstract draw(): void;
}
