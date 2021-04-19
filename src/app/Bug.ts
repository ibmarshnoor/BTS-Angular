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
  priority: Priority = 0;
  status: Status = 0;
  type: TypeEnum = 0;
  severity:Severity=0;
  buildVersion:string="Version 1";
  developerId:number=1;
  testerId:number=1;
  etaDate!: Date;
  submittedOn:Date=new Date();
  inputName:string="Bug 1";
  inputStatus: Status = 0;
}
