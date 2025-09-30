import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Header } from './header/header';
import { User } from './user/user';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';

@Component({
  selector: 'app-root',
  imports: [CurrencyConvertorPipe,CommonModule,User,RouterOutlet,ReactiveFormsModule,RouterLink,NgSwitchDefault, Login, Signup,Header,  FormsModule,NgIf,NgFor,NgSwitch,NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {  
  title = "one by one";
  date = new Date();
  amount = 10;


  // users:undefined|string[];
  // handelUser(users:string[]){
  //   console.log(users)
  //   this.users=users;
  // }


  // users=['harsh','ashu','ram']



  // userName="Bruse"

  // onuser(user:string){
  //   this.userName=user
  // }

  // userDetails:any;

  // addDetails(val:NgForm){
  //   console.log(val);
  //   this.userDetails=val;
  // }



//   profileForm = new FormGroup(
//     {
//       name:new FormControl('',[Validators.required]),
//       password:new FormControl('',[Validators.required,Validators.minLength(5)]),
//       email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
//     }
//   )

// onSubmit(){
//   console.log(this.profileForm.value)
// }

// get name(){
//   return this.profileForm.get('name');
// }
// get password(){
//   return this.profileForm.get('password');
// }
// get email(){
//   return this.profileForm.get('email');
// }



// setValue(){
//   this.profileForm.setValue(
//     {
//       name:'ashu',
//       password:'admn',
//       email:"tudu.com"
//     }
//   )
// }

//   name=new FormControl('harsh');
//   password= new FormControl('bhoi');


// display(){
//   console.log(this.name.value,this.password.value)
// }

// setValue(){
//   this.name.setValue('me');
//   this.password.setValue('admin');
// }
// Show=false;

// color="black";


// chnagecolor(color:string){
//   this.color=color
// }


// login=true;

// block=0

// update(){
//   this.block++;
// }




// students=["hars","xyz","loop"]

// studentsData=[
//   {
//     name:"harhs",
//     age:"20",
//   },
//     {
//     name:"xyz",
//     age:"25",
//   },
//     {
//     name:"erre",
//     age:"28",
//   },
//     {
//     name:"try",
//     age:"15",
//   }
// ]

// studentsData1 = [
//     {
//       name: 'Harsh',
//       age: 20,
//       subjects: ['Math', 'Science', 'English']
//     },
//     {
//       name: 'XYZ',
//       age: 25,
//       subjects: ['Physics', 'Chemistry']
//     },
//     {
//       name: 'Erre',
//       age: 28,
//       subjects: ['Accounts', 'Economics', 'Business']
//     },
//     {
//       name: 'Try',
//       age: 15,
//       subjects: ['History']
//     }
//   ];

// color='blue'
// fontSize='30px'
// headingSizeBig='50px'
// headingSizeSmall='20px'

// zoom=true

// updateHeadingSize(){
//   this.zoom=!this.zoom;
//  }

// task="";
// taskList:{id:number,task:string}[]= [];

// addTask(){
//   if(this.task!==""){
//     this.taskList.push({id:this.taskList.length+1,task:this.task});
//     this.task="";
//   }}

// deleteTask(id:number){
//   this.taskList=this.taskList.filter(item=>item.id!==id);
// }
// name="harsh"

// chnageName(event:Event  ){
//   this.name=(event.target as HTMLInputElement).value;
 
  
// }


  //  users=['Harsh','Bhoi','Test','User1','User2'];

  // users=[];



// userName=signal("Harsh Bhoi");
// count=signal(0);
// displayHeading=false;

// constructor(){
//   effect(()=>{
//    if(this.count()==2)  {
//     this.displayHeading=true;
//     setTimeout(()=>{
//        this.displayHeading=false;
//     },2000)
//    }
//     else{
//       this.displayHeading=false;
//     }
//   })
// }

// toggleValue(){
//   this.count.set(this.count()+1);
 
// }



//   x=10;
//   y=20;
//   z=this.x+this.y;
// showValue(){
//   console.log(this.z)
 
//   this.x=30;
//     console.log(this.z)
// }




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
