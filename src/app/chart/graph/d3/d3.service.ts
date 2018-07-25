import {Injectable} from '@angular/core';
import {ForceDirectedGraph, Link, Node} from './models';
import * as d3 from 'd3';
import CONFIG from '../graph.config';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */
  constructor() {
  }

  g: ForceDirectedGraph;
  links: Link[];

  isCancel: boolean = false;
  isFocus: boolean = false;

  queue: Link[] = [];

  hideNode: Node[] = [];

  hideLink: Link[] = [];

  highLightLink: Link[] = [];

  setGraph(graph: ForceDirectedGraph) {
    this.g = graph;
  }

  setLinks(links: Link[]) {
    this.links = links;
  }

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoomed, zoom, clicked;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      const value = 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')';
      container.attr('transform', value);
    };

    zoom = d3.zoom().on('zoom', zoomed);

    clicked = () => {
      if (this.isCancel == false) {
        //console.log('不清理');
        this.isCancel = true;
      } else {
        this.unFocus();
        //console.log('清理');
      }
    };

    svg.call(zoom);
    svg.on('click', clicked);
  }

  highLight(node: Node) {
    if (this.isFocus == false) {
      for (let x = 0; x < this.links.length; x++) {
        if (this.links[x].source == node || this.links[x].target == node) {
          this.links[x].isHighLight = true;
          this.highLightLink.push(this.links[x]);
        }
      }
      this.g.refresh();
    }
  }

  unHighLight() {
    if (this.highLightLink.length > 0) {
      while (this.highLightLink.length > 0) {
        let l = this.highLightLink.pop();
        l.isHighLight = false;
      }
      this.g.refresh();
    }
  }


  focus(node: Node, links: Link[], nodes: Node[]) {
    this.unFocus();
    const nodeSet: Set<Node> = new Set();
    for (let x = 0; x < links.length; x++) {
      if (links[x].source == node || links[x].target == node) {
        links[x].isFocus = true;
        this.queue.push(links[x]);
        nodeSet.add(links[x].source);
        nodeSet.add(links[x].target);
      } else {
        links[x].isHide = true;
        this.hideLink.push(links[x]);
      }
    }

    this.hideNode = nodes.filter(x => !nodeSet.has(x));
    this.hideNode.forEach(x => x.isHide = true);
    this.isFocus = true;
  }

  unFocus() {
    let ifRefresh = false;
    if (this.queue.length > 0) {
      ifRefresh = true;
      while (this.queue.length) {
        let l = this.queue.pop();
        l.isFocus = false;
        l.isHide = false;
      }
    }

    if (this.hideLink.length > 0) {
      ifRefresh = true;
      while (this.hideLink.length) {
        let l = this.hideLink.pop();
        l.isHide = false;
      }
    }

    if (this.hideNode.length > 0) {
      ifRefresh = true;

      this.hideNode.forEach(x => x.isHide = false);
    }

    this.isFocus = false;

    if (ifRefresh)
      this.g.refresh();
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: Node, links: Link[], nodes: Node[], graph: ForceDirectedGraph) {
    const d3element = d3.select(element);

    let started = () => {
      this.isCancel = false;
      let isDragged = false;
      let last = this.isFocus;
      this.focus(node, links, nodes);
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      let ended = () => {
        if (!d3.event.active) {
          graph.simulation.stop();
        }
        if (isDragged) {
          this.isCancel = true;
          // 如果是拖动 取消高亮
          if (!last) {
            this.unFocus();
            graph.refresh();
          }
        }
      };

      let dragged = () => {
        node.fx = d3.event.x;
        node.fy = d3.event.y;
        isDragged = true;
      };

      d3.event.on('drag', dragged).on('end', ended);
    };

    d3element.call(d3.drag()
      .on('start', started));
  }

  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    return new ForceDirectedGraph(nodes, links, options);
  }
}
