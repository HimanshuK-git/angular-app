import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  // var a=document.getElementById('no1').value;
  // var b=document.getElementById('no2').value;
  constructor() { }

  ngOnInit(): void {
  }

  function add() {
    return a+b;
  }
}
