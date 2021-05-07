import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})

export class AuthontfService {

  constructor (private http: HttpClient){ }

    login(data: {username: string, password: string}){
  console.log(data)
        return this.http.post("http://localhost:8086/api/auth/signin", data);
    }
    fetchPost() {
      return  this.http.get("http://localhost:8086/api/auth").subscribe(res => console.log(res))

    }
  }