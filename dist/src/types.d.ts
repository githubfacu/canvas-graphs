export type ChartDataItem = {
    label: string;
    value: number;
};
export interface ChartOptions {
    margin?: number;
    padding?: number;
    backgroundColor?: string;
    width?: number;
    height?: number;
}
export interface TextOptions {
    font?: string;
    textColor?: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
}
export interface BarChartOptions extends ChartOptions, TextOptions {
    barWidth?: number;
    gap?: number;
    color?: string;
    showLabels?: boolean;
    showValues?: boolean;
}
export interface PieChartOptions extends ChartOptions, TextOptions {
    radius?: number;
    colors?: string[];
    startAngle?: number;
    showLabels?: boolean;
    showPercentages?: boolean;
}
