import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 3, color: 'lightblue'},
    {text: 'Three', cols: 4, rows: 3, color: 'lightblue'}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
