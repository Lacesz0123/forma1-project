import { Component } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { Team } from './models/team.model';

const ELEMENT_DATA: Team[] = [
  {position: 5, name: 'Red Bull', podiums: 241, startingYear: 2005, wins: 96},
  {position: 3, name: 'Mercedes', podiums: 282, startingYear: 1954, wins: 125},
  {position: 10, name: 'Aston Martin', podiums: 4, startingYear: 1957, wins: 0},
  {position: 1, name: 'Ferrari', podiums: 799, startingYear: 1950, wins: 243},
  {position: 9, name: 'Haas', podiums: 0, startingYear: 2015, wins: 0},
  {position: 8, name: 'Alpha Tauri', podiums: 1, startingYear: 2020, wins: 1},
  {position: 7, name: 'Alpine', podiums: 2, startingYear: 2021, wins: 1},
  {position: 6, name: 'Alfa Romeo', podiums: 26, startingYear: 1979, wins: 12},
  {position: 2, name: 'McLaren', podiums: 494, startingYear: 1966, wins: 183},
  {position: 4, name: 'Williams', podiums: 313, startingYear: 1977, wins: 114}
];
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  displayedColumns: string[] = ['position','name', 'podiums', 'startingYear', 'wins'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteClick(row: Team) {
    const filteredArray = this.dataSource.data.filter(el => el.name !== row.name);
    this.dataSource = new MatTableDataSource(filteredArray);
  }
}
