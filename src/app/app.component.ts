import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{


  subject = webSocket('wss://me-test-ffefad8830b5.herokuapp.com/:443')



ngOnInit() {

}


  num = 0
  title = 'again';

  like(){
    this.subject.subscribe()
    this.subject.next({"slider1":0,"slider2":0})
    this.subject.complete
  }
  unlike(){
    this.subject.subscribe()
    this.subject.next({"slider1":1,"slider2":1})
    this.subject.complete
  }
}
