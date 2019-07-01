import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, timer } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}

  testServer(): Observable<any> {
    return this.http.get<any>("/api/posts");
  }

  checkzipcodebystate(zipCode: string, state: string): Observable<any> {
    return timer(500).pipe(
      switchMap(() => {
        // Check if username is available
        const params = new HttpParams()
          .append("zipcode", zipCode)
          .append("state", state);
        return this.http.get<any>("/api/checkzipcodebystate", { params });
      })
    );
  }
}
