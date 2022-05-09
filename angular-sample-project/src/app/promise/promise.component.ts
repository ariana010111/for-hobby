import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})

export class PromiseComponent implements OnInit {
  toDoListObj: any = [
    {
      userId: 1,
      id:1,
      title: 'title',
      completed: false

    }
  ]
  constructor() { }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response)=>{
        return response.json();
      })
      .then((body) =>{
        console.log(body);
        this.toDoListObj = body;

      })
      .catch((err) => {
        console.log(err);
      })
  }

}
