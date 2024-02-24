import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../Services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  task!:any; 
  taskId!:any;

  errors: any = [];
  Loadingtitle: string = "";
  isLoading: boolean = false;
  
  constructor(private routes: ActivatedRoute, private taskService: TaskService) {}
  ngOnInit(){
    this.taskId = this.routes.snapshot.paramMap.get('id');
    // alert(this.taskId);
    this.isLoading = true;
    this.taskService.getTask(this.taskId).subscribe(res => {
      this.task=res.task
      this.isLoading= false;
    });
  }
  UpdateTask(){
    var inputData = {
      title: this.task.title,
      description: this.task.description,
      due_date: this.task.due_date,
      status: 1,
    }
    this.isLoading=true;
    this.taskService.UpdateTask(inputData, this.taskId).subscribe({
      next: (res:any) =>{
        console.log(res);
        alert(res.message);
        this.isLoading = false;
        this.errors=[];
      },
      error: (err:any)=>{
        console.log(err);
        this.errors=err.error.errors;
        this.isLoading = false;
      }
    });

  }
}
