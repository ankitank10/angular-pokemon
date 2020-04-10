import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserService {
  isAdmin:boolean = true

  constructor() {}

  checkIsAdmin() {
    return !!this.isAdmin;
  }
}