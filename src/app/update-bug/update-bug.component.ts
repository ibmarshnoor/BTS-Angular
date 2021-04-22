import { Component, OnInit } from '@angular/core';
import { Bug, Status, Priority, Severity, TypeEnum } from '../Bug';
import { BugService } from '../bug.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {

  bug:Bug=new Bug();
  bugArray:any;
  name:string = '';
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  priorityValues=Object.values(Priority).filter(x => typeof x==="string");;
  typeValues=Object.values(TypeEnum).filter(x => typeof x==="string");;
  severityValues=Object.values(Severity).filter(x => typeof x==="string");;
  constructor(private bugService: BugService) { }
  validate() {
    if (!this.bug.name.trim()) {
      alert('Please enter Bug name.');
    }
  }
    updateBug(bugId:string){
      if(bugId==null ){
        console.log("Id cannot be null");
      }
      //this.validate();
    const promise=this.bugService.updateBug(bugId,this.bug);
     promise.subscribe((response:any)=>{
       console.log(response);
       alert("Bug updated");
    },
       (    error: any)=>{
      console.log(error);
      alert("Status is Invalid");
    })

  }
  getByName(name:string){
    if(name==null){
      alert('Enter Name');
    }
    const observable = this.bugService.getByName(name);
    observable.subscribe(response => {
    console.log(response);
    if(response==0){
      alert('Bug with input name not found');
    }
    this.bugArray=response;
  },error=>{
    console.log(error);
    alert("Error");
  })
}


  ngOnInit(): void {
  }

}
