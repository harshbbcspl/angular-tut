import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  users=[
    {
      id:'1',
      name:'harsh',
      age:'24'
    },
      {
      id:'2',
      name:'Rim',
      age:'22'
    },
      {
      id:'3',
      name:'guru',
      age:'23'
    }
]



// constructor(private router:Router){

// }


// goToProfile(name:string){
//   this.router.navigate(['profile'],{queryParams:{name}})
// }

}
