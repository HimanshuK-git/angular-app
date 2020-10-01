import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tablebody',
  templateUrl: './tablebody.component.html',
  styleUrls: ['./tablebody.component.css']
})
export class TablebodyComponent implements OnInit {

  tablehead = ["Roll","Name","City","College","Qualification","Remove"];
  students = [];
    
  constructor() { }

  ngOnInit(): void {
    fetch("https://jsonblob.com/api/85e4c3b4-ffca-11ea-9da6-a7f02ea36658")
    .then((response) =>response.json())
    .then((json) =>{
      this.students=[...json].map((item) =>({
        ...item
      }))
    })
  }

  Deletethis(s) {
    const index= this.students.indexOf(s);
    this.students.splice(index,1);
  }

}
