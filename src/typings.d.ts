declare module '@godind/canvas-gauges' {
  // Tipos mínimos para satisfacer @godind/ng-canvas-gauges.
  // No son tipos reales; solo desbloquean el build en dev.
  export interface GenericOptions {
    [key: string]: any;
  }

  export interface BaseGauge {
    options?: GenericOptions;
  }

  export interface LinearGauge extends BaseGauge {}
  export interface RadialGauge extends BaseGauge {}

  export interface LinearGaugeOptions extends GenericOptions {}
  export interface RadialGaugeOptions extends GenericOptions {}

  // El paquete suele usarse como namespace (CanvasGauges.X)
  export const CanvasGauges: {
    BaseGauge: BaseGauge;
    LinearGauge: LinearGauge;
    RadialGauge: RadialGauge;
  };

  // Permitir import * as CanvasGauges from '@godind/canvas-gauges'
  const _default: any;
  export default _default;
}

