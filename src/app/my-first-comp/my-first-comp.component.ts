import { Component, inject } from '@angular/core';
import { MyfirstService } from '../services/myfirst.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {
[x: string]: any;
  name : string ='' ;
  email : string ='' ;
  message : string = '' ;
  isSubmitted:boolean=false ;
  messages : Array<any> =[]
  private service :MyfirstService =inject(MyfirstService)
  
  constructor(){
    this.messages = this.service.getAllMessages()
    this.isSubmitted = this.messages.length>0

  }
  onsubmit():void {
this.isSubmitted= true ;
this.service.insert(
  {
    'name': this.name ,
    'email': this.email ,
    'message': this.message
  }
)
console.log(this.messages)
  }

  deletemessage(index :number ):void {
    this.service.deletMessage(index);
  }
}
