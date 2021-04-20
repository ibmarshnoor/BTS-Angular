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
  title: string = "update bugs";
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  priorityValues=Object.values(Priority).filter(x => typeof x==="string");;
  //typeValues=Object.values(TypeEnum).filter(x => typeof x==="string");;
  severityValues=Object.values(Severity).filter(x => typeof x==="string");;
  constructor(private bugService: BugService) { }
    update(){
  //   const promise=this.bugService.update(this.bug);
  //    promise.subscribe(response=>{
  //      console.log(response);
  //      alert("Created Bug");
  //      this.bugArray.push(Object.assign({},this.bug));

  //   },
  //   error=>{
  //     console.log(error);
  //     alert("Error !! : "+error.headers.get("error"))
  //   })
   }

  ngOnInit(): void {
  }

}
