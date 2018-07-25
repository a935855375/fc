import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {HierarchyPointLink, HierarchyPointNode} from 'd3';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnChanges {
  @Input('dataset') data;

  @Input('width') width;

  @Input('height') height;

  @ViewChild('tree')
  _rootElement: ElementRef;

  tree;
  rootData;
  container;
  linkContainer;
  nodeIndex = 0;

  constructor() {

  }

  BCG = d3.linkRadial<HierarchyPointLink<{}>, HierarchyPointNode<{}>>().angle(d => d.x).radius(d => d.y);

  ngOnChanges(changes: SimpleChanges): void {
    if (this.width != 0)
      this.draw();
  }

  draw() {
    this.tree = d3.tree()
      .size([Math.PI * 2, 600])
      .separation(function (a, b) {
        return (a.parent === b.parent ? 1 : 2) / a.depth;
      });

    const svg = d3.select(this._rootElement.nativeElement)
      .attr('width', this.width)
      .attr('height', this.options.height);
    this.container = svg.append('g');
    this.linkContainer = this.container.append('g');

    const zoom = d3.zoom()
      .scaleExtent([0.4, 2])
      .on('zoom', () => {
        // v4: 原来的translate和scale值现在都在 event.transform 中
        // d3.event.transform 等价于
        // "translate(" + d3.event.transform.x + "," + d3.event.transform.y ")scale(" + d3.event.transform.k + ")"
        this.container.attr('transform', d3.event.transform);
      });
    svg.call(zoom);
    // 初始化g标签的位置（居中）

    svg.call(zoom.transform, d3.zoomIdentity.translate(this.options.width / 2, this.options.height / 2).scale(0.9));

    this.getData();
  }

  getData() {
    this.rootData = d3.hierarchy(this.data, d => d.children);

    const collapse = d => {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    };

    this.rootData.children.forEach(collapse);

    this.rootData.children.forEach(this.chanegStatus);

    this.drawTree(this.rootData);
  }

  drawTree(source) {
    console.log(source);

    const radialPoint = (x, y) => {
      return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
    };

    source.x0 = Math.PI;
    source.y0 = 0;

    const treeData = this.tree(this.rootData); // Assigns the x and y position for the nodes.

    const nodes = treeData.descendants(); // Array
    const links = treeData.links(); // Array

    // Normalize for fixed-depth.
    nodes.forEach(d => {
      if (d.depth === 1) {
        d.y = d.depth * 180;
      } else {
        d.y = d.depth * 220;
      }
    });

    const node = this.container.selectAll('.node')
      .data(nodes, d => { // 必须设置id，否则会出现节点错位现象
        return d.id || (d.id = ++this.nodeIndex);
      });

    // Enter
    const nodeEnter = node.enter().append('g')
      .attr('class', d => {
        return 'node node' + d.depth;
      })
      .attr('transform', d => {
        return 'translate(' + radialPoint(source.x0, source.y0) + ')';
      })
      .on('click', d => {
        if (d.depth > 0) this.toggle(d);
      });

    nodeEnter.append('circle')
      .attr('r', 1e-6)
      .style('stroke-opacity', function (d) {
        if (d.children) {
          return 0.5;
        } else {
          return 0;
        }
      });

    nodeEnter.append('path')
      .attr('d', function (d) {
        if (d.depth > 0 && d._children) {
          return 'M-6 -1 H-1 V-6 H1 V-1 H6 V1 H1 V6 H-1 V1 H-6 Z';
        } else if (d.depth > 0 && d.children) {
          return 'M-6 -1 H6 V1 H-6 Z';
        }
      })
      .style('fill-opacity', 0);

    nodeEnter.append('text')
      .attr('dy', function (d) {
        if (d.depth === 0) return '-1.5em';
        return '0.31em';
      })
      .attr('x', function (d) {
        if (d.depth === 0) return 0;
        return d.x < Math.PI ? 16 : -16;
      })
      .attr('text-anchor', function (d) {
        if (d.depth === 0) return 'middle';
        return d.x < Math.PI ? 'start' : 'end';
      })
      .attr('transform', function (d) {
        if (d.depth === 0) return 'rotate(0)';
        return 'rotate(' + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI + ')';
      })
      .text(function (d) {
        return d.data.name;
      })
      .style('fill-opacity', 1e-6);

    // Update
    const nodeUpdate = nodeEnter.merge(node).transition()
      .duration(600)
      .attr('transform', function (d) {
        return 'translate(' + radialPoint(d.x, d.y) + ')';
      });

    nodeUpdate.select('circle')
      .attr('r', function (d) {
        if (d.depth === 0) {
          return 12;
        } else if (d.depth < 3) {
          return 10;
        }
        return 8;
      })
      .style('stroke-opacity', function (d) {
        if (d.children) {
          return 0.5;
        } else {
          return 0;
        }
      });

    nodeUpdate.select('path')
      .attr('d', function (d) {
        if (d.depth > 0 && d._children) {
          return 'M-6 -1 H-1 V-6 H1 V-1 H6 V1 H1 V6 H-1 V1 H-6 Z';
        } else if (d.depth > 0 && d.children) {
          return 'M-6 -1 H6 V1 H-6 Z';
        }
      })
      .style('fill-opacity', 1);

    nodeUpdate.select('text')
      .attr('x', function (d) {
        if (d.depth === 0) return 0;
        return d.x < Math.PI ? 16 : -16;
      })
      .attr('text-anchor', function (d) {
        if (d.depth === 0) return 'middle';
        return d.x < Math.PI ? 'start' : 'end';
      })
      .attr('transform', function (d) {
        if (d.depth === 0) return 'rotate(0)';
        return 'rotate(' + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI + ')';
      })
      .style('fill-opacity', 1);

    // Exit
    const nodeExit = node.exit().transition()
      .duration(600)
      .attr('transform', function (d) {
        return 'translate(' + radialPoint(source.x, source.y) + ')';
      })
      .remove();

    nodeExit.select('circle')
      .attr('r', 1e-6);

    nodeExit.select('path')
      .style('fill-opacity', 0);

    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    const link = this.linkContainer.selectAll('.link')
      .data(links, function (d) { // 此行配置需放在node配置之后
        return d.id || (d.id = 'link' + d.source.id + d.target.id);
      });

    const linkRadial = d3.linkRadial();

    const linkEnter = link.enter().append('path')
      .attr('class', 'link')
      .attr('d', linkRadial
        .angle(function (d) {
          return source.x0;
        })
        .radius(function (d) {
          return source.y0;
        })
      );

    linkEnter.merge(link).transition()
      .duration(600)
      .attr('d', this.BCG);


    link.exit().transition()
      .duration(600)
      .attr('d', linkRadial
        .angle(function (d) {
          return source.x;
        })
        .radius(function (d) {
          return source.y;
        })
      )
      .remove();


    // Store the old positions for transition.
    nodes.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  chanegStatus(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
  }

  toggle(d) {
    this.chanegStatus(d);
    this.drawTree(d);
  }

  get options() {
    return {
      width: this.width,
      height: this.height
    };
  }

}
