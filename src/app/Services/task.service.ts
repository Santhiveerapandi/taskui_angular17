import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';

export interface TaskResponse {
  id: number
  title: string
  description: string
  due_date: string
  status: number
  created_at: string
  updated_at: string
}

export interface TaskResponseType {
  status: Number,
  tasks: TaskResponse[]
}

export interface TaskeditResponse {
  status: Number,
  task: TaskResponse
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  saveTask(inputData: object){
    return this.httpClient.post(`http://localhost:8000/api/tasklist`, inputData);
  } 

  getTasks() {
    return this.httpClient.get<TaskResponseType>(`http://localhost:8000/api/tasklist`);
  }
  getTask(id:number) {
    return this.httpClient.get<TaskeditResponse>(`http://localhost:8000/api/tasklist/${id}`);
  }

  UpdateTask(inputData: object, taskId: number) {
    return this.httpClient.put(`http://localhost:8000/api/tasklist/${taskId}`, inputData);
  }

  destorytask(taskId:number) {
    return this.httpClient.delete(`http://localhost:8000/api/tasklist/${taskId}`);
  }
}
