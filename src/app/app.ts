import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  





  // data :WritableSignal<number>= signal(10);
  // // count:Signal<number>= computed(()=>10);
  


  // updateSignal(){
  //     // this.data.set("hello");
  //     this.data.update((val)=> val + 10);
  
  // }

  // count=signal(10);
  // x=20

  // constructor(){
  //   effect(()=>{
    
  //     console.log(this.count())
  //   })
  // }


  // updateCount(val:string){
  //   // this.x=30
  //   // this.count.set(this.count()+1)


  // //   if(val==='inc'){
  // //     this.count.set(this.count()+1)
  // //   } 
  // //   else if(val==='dec'){
     
  // //       this.count.set(this.count()-1)
  
  // // }
  // }



//   users=["Harsh","Bhoi","Test","User1","User2"]
//   students=[
//     {name:"Harsh",age:24,city:"Ahmedabad"},
//     {name:"Bhoi",age:25,city:"Surat"},
//     {name:"Test",age:26,city:"Rajkot"},
//     {name:"User1",age:27,city:"Mumbai"},
//     {name:"User2",age:28,city:"Delhi"},]

// getName(name:string){
//   alert(name)
// }

  // color='blue'
  // handleColor(val:string){
  //   this.color=val;
  // }




  // color=1

  // handleColor(val:number){
  //   this.color=val;
  // }
 
  // handleInput(event:Event){
  //   this.color=+(event.target as HTMLInputElement).value
  // }













  //  display=true 
  // //  x=10;
  // toggleDiv=true;

  // hide(){
  //   this.display=false;
  // }

  // show(){
  //   this.display=true;
  // }

  // toggle(){
  //   this.display=!this.display;
  // }
  // toggleTwo(){
  //   this.toggleDiv=!this.toggleDiv;
  // }

















//   name=""
//   displayName="";
//   email="";

//   getName(event:Event){
//     const name=(event.target as HTMLInputElement).value;
//     this.name=name;
//   }

//   showName(){
//     this.displayName=this.name;
// }
// setName(){
//   this.name="Sam";
// }

// getEmail(val:string){
// console.log(val)
// this.email=val;
// }

// setEmail(){

// this.email="test@gmail.com";
// }


}











//   handleEvent(event:Event) {
   
    
//     console.log('Event Handled', event.type);
//     //  console.log("value", (event.target as HTMLInputElement).value);
//   }









//   count = 0;

//   handleIncrement() {
//     this.count = this.count + 1;
//   }
//   handleDecrement() {
//     this.count = this.count - 1;
//   }

//   reset() {
//     this.count = 0;
//   }

//   handleCounter(val: string) {
//     if (val === 'inc') {
//       this.count = this.count + 1;
//     } else if (val === 'dec') {

//       if (this.count > 0) {
//         this.count = this.count - 1;
//       }
//     } else {
//       this.count = 0;
//     }
//   }


//   protected readonly title = signal('Harsh Bhoi');
//   name: string | number = 'Angular';
//   updateName() {
//     this.name = 'Updated Angular';

//     let x: number = 30;
//   }

//   sum(a: number, b: number) {
//     console.log(a + b);
//   }


//   handleClickEvent() {
//     alert('Button Clicked');
//     this.otherFunction();
//     this.sum(10, 40);
//   }

//   otherFunction() {
//     console.log('Other Function Called');
//   }
// }
