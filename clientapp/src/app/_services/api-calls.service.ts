import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
// tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}

  // QuickIndicationEPL(quickUSEPL: any) {
  //   return this.http.post<any>('/us/QuickIndicationEPL', quickUSEPL);
  // }

  testServer(): Observable<any> {
    return this.http.get<any>('/api/posts');
  }

  // GetUSEPLNatureOfOperation(): Observable<nop[]> {
  //  return this.http.get<nop[]>('/us/GetUSEPLNatureOfOperation');
  // }
}
