import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) {

   }

   public addToDoLists(task){
      return this.http.post("http://localhost:3000/posts",task);
   }

   public getToDoLists(){
     return this.http.get("http://localhost:3000/posts");
   }

   public deleteToDoList(task){
     const id = task.id;
     const url = "http://localhost:3000/posts/"+ id;
     return this.http.delete(url);
   }

   public editToDoList(id,task){
    const url = "http://localhost:3000/posts/"+id;
    return this.http.put(url,task);
  }

}
