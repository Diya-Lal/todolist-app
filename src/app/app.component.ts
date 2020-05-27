import { Component, ViewChild, OnInit } from '@angular/core';
import { TodolistService } from './shared/todolist.service';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todolist';
  public tasks: string
  public toDoLists;
  public finaltoDoLists;
  private _isDuplicate: boolean = false;
  public taskToEditId: number;
  @ViewChild('alertBox',{static:false}) alertBox: any;

  constructor(private todolistService : TodolistService,public dialog: MatDialog){


  }

  ngOnInit(){
    this.todolistService.getToDoLists().subscribe(
      success=>{
        const list = [];
        list.push(success);
        this.finaltoDoLists = list[0].filter(task=> task.title!=="");
      },
     error => {

     }

    )
  }

  public get isDuplicate(){
    return this._isDuplicate;
  }

  public onAddTask(data: NgForm) {
    this.tasks = data.value.taskName;
    data.form.reset();
    this.onGetTasks(this.tasks);
  }

  public onGetTasks(data) {
    this.toDoLists=[];
    this.todolistService.getToDoLists().subscribe(
      success => {
        this.toDoLists.push(success);
        const duplicate = this.toDoLists[0].find(list => list.title == data);
        if(duplicate){
          this._isDuplicate = true;
        }
        else {
          this.submit();
        }
      }
    )
  }

  public cancel(){
    this._isDuplicate=false;
  }

  public submit(){
    this._isDuplicate = false;
    const task = {
      "title" : this.tasks
    }
    this.todolistService.addToDoLists(task).subscribe(
      success => {
        this.todolistService.getToDoLists().subscribe(
          success=>{
            const list = [];
            list.push(success);
            this.finaltoDoLists = list[0].filter(task=> task.title!=="");
          },
         error => {

         }

        )
      },
      error=> {
        console.log("error")
      }

    )

  }

  public delete(list){
    this.todolistService.deleteToDoList(list).subscribe(
      success=>{
        this.todolistService.getToDoLists().subscribe(
          success=>{
            const list = [];
            list.push(success);
            this.finaltoDoLists = list[0].filter(task=> task.title!=="");
          },
         error => {

         }

        )

      },
      error=>{

      }
    )
  }

  public edit(task){
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '250px',
      panelClass: 'custom-modalbox',
      data: { 
        taskToEdit : task
      }
    }).afterClosed().subscribe(
      (editedLists) => 
      {
       this.getToDoListFromServer();
      }
      );

  }

  public getToDoListFromServer(){
    this.todolistService.getToDoLists().subscribe(
      success=>{
        const list = [];
        list.push(success);
        this.finaltoDoLists = list[0].filter(task=> task.title!=="");
      },
     error => {

     }

    )
  }

  public setTaskToEdit(task){
    this.taskToEditId=task.id;
  }

  trackByItemId(index: number, item: any): string {
    return item.id;
    }

   public onTaskStatusUpdate(task,status){
     const statusEdit = JSON.parse(JSON.stringify(task));
     statusEdit.complete = status ==='Done'? true : false;
      this.todolistService.editToDoList(task.id,statusEdit).subscribe(
        success =>
        {
          this.getToDoListFromServer();
        },
        error=>{
  
        }
      );
    }
}
