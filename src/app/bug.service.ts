import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug} from './Bug';
import { Status } from './Bug'
const URL='http://localhost:8080/bug';
@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http:HttpClient) { }
  save(bug:Bug){
    return this.http.post('http://localhost:8080/bug', bug,{
      headers:{ "content-type":'application/json' }
    });
  }
  getAllBugs(){
    return this.http.get(URL);
  }
  getByName(bugName:string){
   return this.http.get(URL+'name/'+bugName);
  }
  getByStatus(bugStatus:Status){
    return this.http.get(URL+'status/'+status);
  }
}