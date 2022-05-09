import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-create-first-observable',
  templateUrl: './create-first-observable.component.html',
  styleUrls: ['./create-first-observable.component.scss']
})
export class CreateFirstObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const interval$ = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      //farz konim ye ghesmat az barname hast ke mikhaym ye error bar asase ye sharayet behemoon bede
      observer.error(new Error('Error in app'));

    });
    // chon inja observable ha eager nistan va lazy hastan taghriri too barname ijad nemishe va bayad subscribe konim
    interval$.subscribe(
      (val) => {console.log(val);}
      //inja behesh migam man midoonam ye value ro daryaft mikonam inja bia valueyi ke daryaft kardamo too console behem namayesh bede
    );
    //vaghti subscribe mikonim code ma bar asase contracti ke barash tarif kardim miad shoro mikone be run shodan contract mnzoor next - error - complete
    const count$ = new Observable((subscriber:Observer<string>) => {
      subscriber.next('Samira');
      subscriber.next('Maryam');
      subscriber.next('Mahsa');
    });
    //we want to create an interval with observable
    const counter$ = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() =>{
        observer.next(count++);
        if(count == 5) {
          observer.complete();
          //bar asas gharardad shoma ya error darid ya complete
          //ta inja ke az complete estefade mikonim hich etefaghi nemiofte
          //dalilesh ine ke vaghti mikhaym etefaghi biofte goftim too subscribtion bashe
         // observer.error(new Error('We reached 5'));
        }
      }, 1000);
    });
    counter$.subscribe(
      (val) => {console.log(val);},
      //in yani ma error ro handle kardim vaghti residim be 5 ghermez nist
       (err) => {console.log(err);},
      () => {console.log('completed');}
    );
  }

}
