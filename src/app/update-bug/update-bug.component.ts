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

  bug1:Bug=new Bug();
  bugArray:any;
  name:string = '';
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  priorityValues=Object.values(Priority).filter(x => typeof x==="string");;
  typeValues=Object.values(TypeEnum).filter(x => typeof x==="string");;
  severityValues=Object.values(Severity).filter(x => typeof x==="string");;
  constructor(private bugService: BugService) { }
  validate() {
    if (!this.bug1.name.trim()) {
      alert('Please enter Bug name.');
    }
  }
  updateBug(bugName:String,bugId:String){
    if(bugName==null){
      alert("Enter bug name");
    }
    else{
    const promise=this.bugService.updateBug(bugId,this.bug1);
    promise.subscribe(response=>{
      console.log(response);
      alert("Bug updated");
     },
    error=>{
      console.log(error);
      alert("Status Invalid");
    })
  }
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
    this.bug1.id=this.bugArray[0].id;
    this.bug1.name=this.bugArray[0].name;
    this.bug1.product=this.bugArray[0].product;
    this.bug1.module=this.bugArray[0].module;
    this.bug1.projectId=this.bugArray[0].projectId;
    this.bug1.synopsis=this.bugArray[0].synopsis;
    this.bug1.description=this.bugArray[0].description;
    this.bug1.priority=this.bugArray[0].priority;
    this.bug1.status=this.bugArray[0].status;
  },error=>{
    console.log(error);
    alert("BugName is not present");
  })
}


  ngOnInit(): void {
  }

}
