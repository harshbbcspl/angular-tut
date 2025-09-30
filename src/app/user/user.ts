import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  @Output() getUsers = new EventEmitter();
    users=['ram','harsh']

//  @Input() user: string = "";
//   @Input() city: string = "";
 
 
 loaddata(){
  this.getUsers.emit(this.users);
 }
 
 
//   name:null|string=""
// constructor(private route:ActivatedRoute){

// }

// ngOnInit(){
//   this.route.params.subscribe((params)=>{
//     console.log(params);
//     this.name=params['name'];
//   })
// }
}
