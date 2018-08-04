import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from './../../app/app.config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersServiceProvider {

  constructor(public http: HttpClient) {

  }

}
