import APP_CONFIG, {default as CONFIG} from '../../graph.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  linkCount: number = 0;
  isHide = false;

  constructor(id) {
    this.id = id;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  };

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }

  get name() {
    if (!this.isHide)
      return this.id;
    else
      return '';
  }

  get opacity() {
    if (!this.isHide)
      return CONFIG.NORMAL_OPACITY;
    else
      return CONFIG.TRANSPARENT_OPACITY;
  }
}
