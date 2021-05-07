import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  set(data: any){
    localStorage.setItem('token', data.accessToken);
    console.log(data.accessToken);
    console.log("localstorage " + localStorage.getItem("token"));
    localStorage.setItem('id', data.id);
    localStorage["isLoggin"] = true;

  }

  handle(data: any){
    this.set(data);
  }
  
  getToken(){
    return localStorage.getItem('token');
  }

  getIsLoggin() {
    return localStorage.getItem('isLoggin');
  }
  getId(){
    return localStorage.getItem('id');
  }
  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('isLoggin');
  }

  decode(payload: any){
    return JSON.parse(atob(payload));
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    console.log('payload: ', payload);
    return this.decode(payload);
  }

  isValid(){
    const token = this.getToken();
    const id = this.getId();
    const isLoggin = this.getIsLoggin();
    console.log("id " + id);
    if (isLoggin) {
      return true;
    }
    // if(token){

    //   const payload = this.payload(token);
    //   console.log("payload"+payload)
    //   if(payload){
    //     console.log("payloadid "+payload.id)
    //     return id == payload.id;
        
    //   }
    // }
    return false;
  }
 getInfos(){

  const token = this.getToken();

  if(token){
    const payload = this.payload(token);
    return payload ? payload : null;
  }
  return null
 }

 loggedIn(){
  return this.isValid();
 }



}
