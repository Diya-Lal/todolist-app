import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodolistService } from '../shared/todolist.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private todolistService : TodolistService,
) 
{
this.taskToEdit = JSON.parse(JSON.stringify(data.taskToEdit));
this.editedTaskId = data.taskToEdit.id;
}

  public taskToEdit: string;
  public editedTaskId: number;

  ngOnInit() {
    
  }

  public onEditTask(editedTask){
    const editedtask = this.taskToEdit;
    this.todolistService.editToDoList(this.editedTaskId,editedtask).subscribe(
      success =>
      {
        this.close();
      },
      error=>{

      }
    );
  }
  

  public editTask(){

  }

  close(): void {
    this.dialogRef.close();
  }

}
