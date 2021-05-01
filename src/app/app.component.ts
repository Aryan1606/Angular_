import {  Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';

  // Error Input element
  @ViewChild('error', { static: true }) error : any;

  // Reset Button element
  @ViewChild('reset', { static: true }) reset : any;
  
  // Add Button
  @ViewChild('add', { static: true }) add : any;

  // To count the number of times the Display button is clicked
  count:number=0;
  para:string="Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears."
  buttonClick:boolean=false
  data:String=""

  // To store all input data of user
  list:Array<String>=[];

  // For Checking every 5th element: count2
  count2=0;
  
  onDisplay(){
        this.count+=1;
        this.buttonClick=!this.buttonClick;    
        this.reset.nativeElement.style.display="block"
  }

  onReset(){
    this.count=0;
    this.buttonClick=false;  
    this.reset.nativeElement.style.display="none"
  }

  // styleObject={'background-color': 'blue'}

  // To provide background colour for every 5th data as blue
  getColor(item:any){
    if((item+1)%5==0)
    return 'blue'
    else{
      return 'white'
    }   
}

  onAdd(){
    
    if(this.data.trim().length>0){
      this.list.push(this.data)
      this.data=""
      this.count2+=1;
    }
    else{
      // After a certain number of data is added to the list , the Error Element
      // which is block level has to be changed to Inline Element in order to
      // prevent the view from being obstructed.
      if(window.scrollY<=350){
           this.error.nativeElement.classList.add("error")
           
           this.error.nativeElement.style.display="block"
           this.error.nativeElement.style.marginTop="10px"
           this.error.nativeElement.style.marginLeft="0px"
      }
      else{
        this.error.nativeElement.classList.remove("error")

        this.error.nativeElement.style.display="inline"
        this.error.nativeElement.style.marginLeft="15px"
        this.error.nativeElement.style.marginTop="4px"  
      }
      this.error.nativeElement.innerHTML="Empty !"
      setTimeout(()=>{
        this.error.nativeElement.innerHTML=""
        this.error.nativeElement.style.display="none"
      },800)
    }
  }
}
