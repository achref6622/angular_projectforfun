import { Component, EventEmitter, Input , Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent {


  @Input()
message:any=[]
@Input()
index:number=-1 ;



@Output()
delete: EventEmitter<number> = new EventEmitter<number>();
delet():void{
this.delete.emit(this.index)
}
}
