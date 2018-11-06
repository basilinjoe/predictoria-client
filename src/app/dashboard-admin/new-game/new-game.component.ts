import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Team {
  name:string,
  id:string
}
const TEAMS:Team[] =[
  { id:'1', name:'India' },
  { id:'2', name:'Australia' },
];
@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent{
  Teams = TEAMS;
  constructor(
    public dialogRef: MatDialogRef<NewGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    this.dialogRef.close();
  }
}
