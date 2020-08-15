import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  @Input()
  grid: Array<Array<boolean>>  = [[]];

  user_grid: Array<Array<boolean>> = [[]];

  ngOnInit(): void {
    this.user_grid = this.grid.map(row => row.map( () => false));
  }

  public activeCell(row_id: number, col_id: number): void {
    this.user_grid[row_id][col_id] = !this.user_grid[row_id][col_id];
  }

  public getRowNumber( row_id: number): Array<number> {
    return this.getSucessiveActivatedCells(this.grid[row_id]);
  }

  public getColNumber( col_id: number): Array<number> {
    return this.getSucessiveActivatedCells(this.grid.map( row => row[col_id]));
  }

  private getSucessiveActivatedCells(cells: Array<boolean>): Array<number> {
    const result =  cells.reduce((previous, current) => {
      if(current === true){
        if(!previous.is_previous_cell_active){
          previous.value.push(0);
        }
        previous.value[previous.value.length-1]++;
      }
      previous.is_previous_cell_active = current;
      return previous;
    }, {
      is_previous_cell_active: false,
      value: []
    }).value;

    if (result.length > 0) {
      return result;
    } else {
      return [0];
    }
  }

}
