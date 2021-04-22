import { Component, OnInit } from '@angular/core';
import { Bug, Status } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-search-bug',
  templateUrl: './search-bug.component.html',
  styleUrls: ['./search-bug.component.css']
})
export class SearchBugComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  constructor(private bugService: BugService) { }
  getByStatus(status:Status){
    if(status==null){
      alert('Enter Status');
    }
    const observable = this.bugService.getByStatus(status);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert('Bug with input status not found');
      }
      this.bugArray=response;
    },error=>{
      console.log(error);
      alert("Error");
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
  getByStatusAndName(status:Status,name:string){
    if(status==0 || name==null){
      alert("Enter both Status and Name");
    }
    const observable=this.bugService.getByStatusAndName(status,name);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" Bug with status and name not found ");
      }
      this.bugArray=response;

  }
    )
  }
  deleteBug(bugId:String){
    const observable=this.bugService.deleteBug(bugId);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" Bug not found");
      }
      this.bugArray=response;
    }
    )
  }

  ngOnInit(): void {
    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
     console.log(response);
     this.bugArray = response;
  });
}
}
