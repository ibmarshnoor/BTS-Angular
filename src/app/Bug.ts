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
  name='';
  product='';
  module='';
  projectId='';
  synopsis='';
  description='';
  priority='';
  status='';
  type: TypeEnum = 0;
  severity:Severity=0;
  buildVersion='';
  developerId='';
  testerId='';
  etaDate!: Date;
  submittedOn:Date=new Date();
  inputName='';
  inputStatus: Status = 0;
}
