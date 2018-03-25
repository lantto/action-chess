import { Vector2D } from './position';

export enum Direction {
  HORIZONTAL,
  VERTICAL,
  DIAGONAL,
  OMNI,
}

export interface IPiece {
  position  : Vector2D;
  maxSteps  : number;
  direction : Direction;
  kills     : number;
}

export class Piece implements IPiece {

  position  : Vector2D;
  maxSteps  : number = 0;
  direction : Direction;
  kills     : number = 0;

  canMoveTo (destination: Vector2D): boolean {
    return (Math.abs(this.position.x - destination.x) <= this.maxSteps
      && Math.abs(this.position.y - destination.y) <= this.maxSteps
      && destination.x >= 0 && destination.x <= 7
      && destination.y >= 0 && destination.y <= 7
    );
  }

}


export class Pawn extends Piece implements IPiece {

  kills: number = 0;

  constructor (
    public position: Vector2D,
    public maxSteps: number,
    public direction: Direction,
  ) {
    super();
  }

}
