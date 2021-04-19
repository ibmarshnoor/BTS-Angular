import { Type } from '@angular/core';

export enum Priority{
  HIGH,MEDIUM,LOW
}
export enum Status{
  NEW,ASSIGNED,OPEN,FIXED,PENDING_RETEST,REOPEN,VERIFIED,CLOSED,REJECTED,DUPLICATE,DEFERRED,NOT_A_BUG
}
export enum TypeEnum{
  RUN_TIME,COMPILE_TIME
}
export enum Severity{
  HIGH,MEDIUM,LOW
}
export class Bug{
  name:string='Bug 1';
  product:string='Product 1';
  module:string='Module 1';
  projectId:string="1";
  synopsis:string="Synopsis";
  description:string="Description";
  priority:string="priority";
  status:string="status";
  type:string="Type";
  severity:string="Severity";
  buildVersion:string="Version 1";
  developerId:number=1;
  testerId:number=1;
  etaDate:string="16-04-2021";
  submittedOn:Date=new Date();
  inputName:string="Bug 1";
  inputStatus:string="";
}
