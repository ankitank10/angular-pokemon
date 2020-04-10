import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  showError(errors: string) { 
        console.log(errors);
  }
}