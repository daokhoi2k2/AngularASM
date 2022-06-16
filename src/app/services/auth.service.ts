import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(username: string = '', password: string = '') {
    const userInfo = { un: username, pw: password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(
      'http://localhost:4000/login',
      JSON.stringify(userInfo),
      { headers: headers, responseType: 'text' }
    );
  }

  thoat() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
  }

  public daDangNhap() {
    const str = localStorage.getItem('expires_at') || '';
    if (str == '') return false; //chưa dn
    const expiresAt = JSON.parse(str);
    return moment().isBefore(moment(expiresAt));
  }

  getMe() {
    if (localStorage.getItem('id_token')) {
      return jwt_decode(localStorage.getItem('id_token') as string);
    }
    return null;
  }
}
