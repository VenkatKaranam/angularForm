import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  submitted= false;
  result={
    firstname:'',
    email:'',
    number:'',
    password:'',
    companyname:'',
    dob:'',
    file:''
  };
  size=0;
  url='';
  warn='';
  ngOnInit() {
    
 }

 onselectfile(event  :any){
    if(event.target.files){
      this.size=event.target.files[0].size;
      console.log(this.size);
      var reader= new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(_event) =>{
        if(this.size>2048000){
          this.warn='File size larger than 2MB';
        }
        else if(this.size<2048000){
            this.warn='';
            this.url=reader.result as string;
        }
       
      }
    }

 }

  onSubmit(value :any){
    if(this.size<2048000){
       this.submitted=true; 
    this.result=value;
    console.log(this.result)
    }
   
  }

}
