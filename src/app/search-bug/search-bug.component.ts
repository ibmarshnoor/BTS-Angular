import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
import { Status } from '../Bug';
import { Priority } from '../Bug';
import { TypeEnum } from '../Bug';
import { Severity  } from '../Bug';


@Component({
  selector: 'app-search-bug',
  templateUrl: './search-bug.component.html',
  styleUrls: ['./search-bug.component.css']
})
export class SearchBugComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  statusValues=Object.values(Status);
  priorityValues=Object.values(Priority);
  typeValues=Object.values(TypeEnum);
  severityValues=Object.values(Severity);
  constructor(private bugService: BugService) {
       }
       getByStatus(status:string){
      const observable = this.bugService.getByStatus(status);
      observable.subscribe(response => {
        console.log(response);
        this.bugArray=response;
      })
    }
      getByName(name:string){
        const observable = this.bugService.getByName(name);
      observable.subscribe(response => {
        console.log(response);
        this.bugArray=response;
      })
    }

  ngOnInit(): void {
    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
     console.log(response);
     this.bugArray = response;
   });
   }
 }
