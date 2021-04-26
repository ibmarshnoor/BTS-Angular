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
      alert("Bug with status not present");
    })
  }


  isReadMore = true
  showText(bugsynopsis:string) {
    alert(bugsynopsis);
     //this.isReadMore = !this.isReadMore
  }
  showDescription(bugdescription:string) {
    alert(bugdescription);
     //this.isReadMore = !this.isReadMore
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
      alert("Bug name doesn't exist");
    })
  }
  partialSearch(name:String){
    if(name==null){
      alert('Enter Name');
    }
    const observable = this.bugService.partialSearch(name);
    observable.subscribe(response => {
    console.log(response);
    if(response==0){
      alert('Bug with input name not found');
    }
    this.bugArray=response;
  },error=>{
    console.log(error);
    alert("Bug name doesn't exist");
  })
  }
  getByStatusAndName(status:Status,name:string){
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
    const value= confirm("Do you want to delete a bug?");
    if(value==true){
    observable.subscribe(response => {
      console.log(response);
      alert('Bug Deleted!!!');
      if(response==0){
        alert(" Bug not found");
      }
      this.bugArray=response;
    }
    )
  }
  else{
    alert('Bug is not deleted');
  }
  }

  ngOnInit(): void {
    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
     console.log(response);
     this.bugArray = response;
  });
}
}
