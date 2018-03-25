import { Component, Element } from '@stencil/core';
import { GridPosition } from '../../lib/position';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {

  @Element() el: HTMLElement;
  ctx: CanvasRenderingContext2D;
  WIDTH  = 800;
  HEIGHT = 800;
  GRID_SIZE = this.WIDTH / 8;
  gridItems: GridPosition[] = [...Array(8 * 8).keys()].map(i => ({
    color: i % 2 === 0 ? '#f00' : '#eee',
    position: {x: i % 8, y: 0},
  }));

  render() {
    return <div class="host">
      <canvas width={this.WIDTH} height={this.HEIGHT}></canvas>
    </div>
  }

  componentDidLoad() {
    this.ctx = this.el.shadowRoot.querySelector('canvas').getContext('2d');
    this.paint();
  }

  paint () {
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.drawSquares();
    // window.requestAnimationFrame(this.paint.bind(this));
  }

  drawSquares () {
    for (let i = 0; i < this.gridItems.length; i++) {
      const gridItem = this.gridItems[i];
      this.ctx.fillStyle = gridItem.color;
      console.log(gridItem.position.x * this.GRID_SIZE,
        gridItem.position.y * this.GRID_SIZE,
        gridItem.position.x * this.GRID_SIZE + this.GRID_SIZE,
        gridItem.position.y * this.GRID_SIZE + this.GRID_SIZE,
        gridItem.color
      );
      this.ctx.rect(
        gridItem.position.x * this.GRID_SIZE,
        gridItem.position.y * this.GRID_SIZE,
        gridItem.position.x * this.GRID_SIZE + this.GRID_SIZE,
        gridItem.position.y * this.GRID_SIZE + this.GRID_SIZE
      );
      this.ctx.fill();
    }
  }
}
