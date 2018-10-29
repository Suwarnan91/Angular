import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Status } from '../Model/status.model';

const httpOption={
  headers:new HttpHeaders({'content':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpObj:HttpClient) { }
  private statusUrl='http://localhost:8080/hrm_system/status';

  getAllStatus(){
    return this.httpObj.get<Status[]>(this.statusUrl);
  }

  createStatus(data){
    return this.httpObj.post<Status>(this.statusUrl,data);
  }

  deleteStatus(num){
    return this.httpObj.delete<Status>(this.statusUrl+"/"+num.id);
  }

  updateStatus(num){
    return this.httpObj.put<Status>(this.statusUrl+"/"+num.id,num);
  }
}
