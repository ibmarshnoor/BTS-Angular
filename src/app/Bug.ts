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
  product:string='product 1';
  module:string='Module 1';
  projectId:string='1';
  synopsis:string='Synopsis';
  description:string='Description';
  priority:string='';
  status:string='';
  type:string='';
  severity:string='';
  buildVersion:string='Version';
  developerId:number=1;
  testerId:number=1;
  etaDate:number=1;
  submittedOn:Date=new Date();
}
