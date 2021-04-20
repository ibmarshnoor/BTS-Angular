import { Component, OnInit } from '@angular/core';
import { Bug, Status, Priority, Severity } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  priorityValues=Object.values(Priority).filter(x => typeof x==="string");;
  //typeValues=Object.values(TypeEnum).filter(x => typeof x==="string");;
  severityValues=Object.values(Severity).filter(x => typeof x==="string");;
  constructor(private bugService: BugService) { }
  ngOnInit(): void {

  }
   update(){
    const promise=this.bugService.save(this.bug);
    promise.subscribe(response=>{
      console.log(response);
      alert("Updated Bug");
      this.bugArray.push(Object.assign({},this.bug));
    },
    error=>{
      console.log(error);
      alert("error happened");
    })
}
}
