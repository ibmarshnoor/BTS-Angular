import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
import { Status } from '../Bug';
import { Priority } from '../Bug';
import { TypeEnum } from '../Bug';
import { Severity  } from '../Bug';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bugform.component.html',
  styleUrls: ['./bugform.component.css']
})
export class BugFormComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  //   const observable = this.bugService.getAllBugs();
  //   observable.subscribe(response => {
  //    console.log(response);
  //    this.bugArray = response;
  // });
  }
}
