import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
import { Status } from '../Bug';
import { Priority } from '../Bug';
import { TypeEnum } from '../Bug';
import { Severity  } from '../Bug';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  statusValues=Object.values(Status);
  priorityValues=Object.values(Priority);
  typeValues=Object.values(TypeEnum);
  severityValues=Object.values(Severity);
  constructor(private bugService: BugService) { }
  save(){
    const promise=this.bugService.save(this.bug);
    promise.subscribe(response=>{
      console.log(response);
      alert("bug added");
      this.bugArray.push(Object.assign({},this.bug));
    },
    error=>{
      console.log(error);
      alert("error happened");

    })
  }

  ngOnInit(): void {
  }

}
