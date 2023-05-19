import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  // METODO PARA INICIAR SESIÓN
  async signIn(email: string, password: string){
    try{
      return true;
    
    } catch (err:any) {
        console.log(err);
        return err;
    }
  }

  // METODO PARA REGISTRARSE
  async signUp(email: string, password: string){
    try{
      return true;
    
    } catch (err:any) {
        console.log(err);
        return err;
    }
  }
}
