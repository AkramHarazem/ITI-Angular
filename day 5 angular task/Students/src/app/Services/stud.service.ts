import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudService {

  constructor(private client: HttpClient) {}
  BaseUrl = "http://localhost:3000/students";

  getAllStudents() {
    return this.client.get(this.BaseUrl)
  }
  getStudentById(id: any) {
    return this.client.get(`${this.BaseUrl}/${id}`)
  }

  createStudent(student: any) {
    return this.client.post(this.BaseUrl, student)
  }

  updateStudent(id: any, student: any) {
    return this.client.put(`${this.BaseUrl}/${id}`, student)
  }

  deleteStudent(id: any) {
    return this.client.delete(`${this.BaseUrl}/${id}`)
  }

  // deleteAllStudents(){
  //   return this.client.delete(this.BaseUrl)
  // }

}
