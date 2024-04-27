import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserDTO } from '../model/userDTO';
import { Observable, catchError, throwError } from 'rxjs';
import {User} from "../model/user";
import {UserProfileView} from "../model/UserProfileView";
import {MyProfile} from "../model/MyProfile";

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
  public getProfilePicturePath(userUUID: string | null)  : Observable<string> {
    return this.http.get(`${this.userUrl}/profilePic/${userUUID}`, { responseType: 'text' });
  }
  getUserProfile(): Observable<MyProfile> {
    return this.http.get<MyProfile>(`${this.userUrl}/profile`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return this.createUser();
        }
        throw(error);
      })
    );
  }

  private createUser(): Observable<MyProfile> {
    return this.http.post<MyProfile>(this.userUrl, {});
  }
}
