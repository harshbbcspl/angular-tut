import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface User {
  id?: number;
  name: string;
  role?: string;
  salary?: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'http://localhost:3000/users';

  // shared state: BehaviorSubject holds current value and is great for shared data
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  // CRUD
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api).pipe(catchError(this.handleError));
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`).pipe(catchError(this.handleError));
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user).pipe(catchError(this.handleError));
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.api}/${id}`, user).pipe(catchError(this.handleError));
  }

  deleteUser(id: number) {
    return this.http.delete<void>(`${this.api}/${id}`).pipe(catchError(this.handleError));
  }

  // shared state helpers
  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  private handleError(err: any) {
    console.error(err);
    return throwError(() => err);
  }
}
