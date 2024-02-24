import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TaskService } from '../../Services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  title!: string;
  description!: string;
  due_date!: string;
  status !: string;

  errors: any = [];
  Loadingtitle: string = "Loading";
  isLoading: boolean = false;
  constructor(private tasklistservice: TaskService )
  {
    // this.getAllStudent();
  }

  /* getAllStudent()
  {
    this.http.get("http://localhost:8000/api/student")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.StudentArray = resultData;
    });
  } */


  saveTask() {
    var inputData = {
      title: this.title,
      description: this.description,
      due_date: this.due_date,
      staus: this.status
    }
    this.isLoading = true;
    this.Loadingtitle = "Saving";
    this.tasklistservice.saveTask(inputData).subscribe({
      next:(res: any) => {
        // console.log(res, 'response');
        alert(res.message);
        this.title='';
        this.description='';
        this.due_date='';
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errors = err.error.errors;
        // console.log(err.error.errors, 'errors')
      }
    });

  }
}
