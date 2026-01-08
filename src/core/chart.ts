import { ChartDataItem, ChartOptions } from "../types";

export type ChartArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export abstract class Chart<T extends ChartOptions> {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  protected data: ChartDataItem[];
  protected options: T;

  constructor(
    canvas: HTMLCanvasElement,
    data: ChartDataItem[],
    options: T
  ) {
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not available");

    if (options.width !== undefined) canvas.width = options.width;
    if (options.height !== undefined) canvas.height = options.height;

    this.canvas = canvas;
    this.ctx = ctx;
    this.data = data;
    this.options = options;
  }

  /** Limpia todo el canvas */
  protected clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /** Dibuja el fondo del canvas */
  protected drawBackground(): void {
    const { backgroundColor } = this.options;

    if (!backgroundColor || backgroundColor === "transparent") return;

    this.ctx.save();
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.restore();
  }

  /** Área lógica donde se debe dibujar el chart */
  protected getChartArea(): ChartArea {
    const margin = this.options.margin ?? 16;
    const padding = this.options.padding ?? 16;

    const x = margin + padding;
    const y = margin + padding;

    const width =
      this.canvas.width - (margin + padding) * 2;
    const height =
      this.canvas.height - (margin + padding) * 2;

    return { x, y, width, height };
  }

  public render(): void {
    this.clear();
    this.drawBackground();
    this.draw();
  }

  public updateData(data: ChartDataItem[]): void {
    this.data = data;
    this.render();
  }

  public updateOptions(options: Partial<T>): void {
    this.options = { ...this.options, ...options };

    if (options.width !== undefined) this.canvas.width = options.width;
    if (options.height !== undefined) this.canvas.height = options.height;

    this.render();
  }

  protected abstract draw(): void;
}
