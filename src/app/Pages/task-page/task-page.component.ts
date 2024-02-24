import { Component } from '@angular/core';
import { TaskService, TaskResponse } from '../../Services/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  constructor(private taskService: TaskService) {

  }
  tasks!: TaskResponse[];
  isLoading: boolean=false;
  ngOnInit(){
    this.getTaskList();
  }
  getTaskList(){
    this.isLoading=true;
    this.taskService.getTasks().subscribe((res)=>{
      
      this.tasks=res.tasks;
      // console.log(this.tasks);
      this.isLoading=false;
    });
  }
  
  deleteTask(event: any, id:number) {
    if(confirm("are you sure you want to delete this data?")){
      event.target.innerText = "Deleting...";

      this.taskService.destorytask(id).subscribe((res:any)=>{
        this.getTaskList();
        alert(res.message);
      })
    }
  }
}
