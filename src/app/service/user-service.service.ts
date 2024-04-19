import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserDTO } from '../model/userDTO';
import { Observable, catchError, throwError } from 'rxjs';
import {User} from "../model/user";
import {UUID} from "crypto";
import {UserProfileView} from "../model/userProfile/UserProfileView";

@Injectable()
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/user';
  }

  public findAll(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.userUrl);
  }

  public save(user: User) {

    return this.http.post<User>(this.userUrl, user);
  }
  public getUser(userUUID: string | null)  : Observable<UserProfileView> {
    return this.http.get<UserProfileView>(`${this.userUrl}/${userUUID}`);
  }
}
