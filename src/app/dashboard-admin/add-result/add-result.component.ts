import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NewGameComponent} from '../new-game/new-game.component';
export interface Game {
  team1: string;
  team2: string;
  position: number;
  date: string;
  result: string;
}

const ELEMENT_DATA: Game[] = [
 {team1:'India', team2:'Austraila',position:1,date:'24-11-2018', result:''},
 {team1:'India', team2:'Austraila',position:2,date:'24-11-2018', result:''},
 {team1:'India', team2:'Austraila',position:3,date:'24-11-2018', result:''},
];
@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  displayedColumns: string[] = ['position', 'team1', 'team2', 'date', 'result', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  editButtonClick(item:Game):void {
    console.log(item);
  }

  addButtonClick():void {
    const dialogRef = this.dialog.open(NewGameComponent, {
      
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
