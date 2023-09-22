import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyfirstService {
messages : Array<any> =[]
  constructor() { 
    this.init()
  }

  init ( ): void {
this.insert ({
    name:'achref' ,
    email:'rezachref@gmail.com',
    message :'msg'
})
this.insert ({
  name:'mohamed' ,
  email:'mohamed@gmail.com',
  message :'cv'
})
  }


  insert(message: {name:string , email:string ,message:string}): void {
    this.messages.push(message) ;
  }
  getAllMessages () :any[] {
    return this.messages ;
  }
  deletMessage(index:number) :void {
    this.messages.splice(index,1);
  }
}
