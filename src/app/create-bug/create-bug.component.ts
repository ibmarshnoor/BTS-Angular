import { Component, OnInit } from '@angular/core';
import { Bug, Status, Priority, TypeEnum, Severity } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  priorityValues=Object.values(Priority).filter(x => typeof x==="string");;
  typeValues=Object.values(TypeEnum).filter(x => typeof x==="string");;
  severityValues=Object.values(Severity).filter(x => typeof x==="string");;
  constructor(private bugService: BugService) { }

  isReadMore=true

  showText(){
    this.isReadMore=!this.isReadMore
  }

   save(){
     const currentDate=new Date();
     const eta=new Date(this.bug.etaDate);
     if(eta<currentDate){
       alert('Eta should be a future date');
     }
     const promise=this.bugService.save(this.bug);
     promise.subscribe(response=>{
       console.log(response);
       alert("Created Bug");
       this.bugArray.push(Object.assign({},this.bug));
     },
     error=>{
       console.log(error);
       alert("Please fill the Required Fields!!!");
     })
    }
   ngOnInit(): void {
  }
}
