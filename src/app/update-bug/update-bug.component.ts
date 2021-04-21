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
    updateBug(bugId:string){
    const promise=this.bugService.updateBug(bugId,this.bug);
     promise.subscribe((response:any)=>{
       console.log(response);
       alert("Bug updated");
    },
       (    error: any)=>{
      console.log(error);
      alert("Error happened");
    })

  }


  ngOnInit(): void {
  }

}
