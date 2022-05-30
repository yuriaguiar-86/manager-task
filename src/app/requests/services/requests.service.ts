import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requests } from '../model/requests';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private readonly api = environment.api;
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Requests[]>(this.api);
  }

  listById(id: number) {
    return this.http.get<Requests>(`${this.api}/${id}`)
  }

  save(task: Requests) {
    return this.http.post<Requests>(this.api, task).pipe(first());
  }

  update(task: Requests) {
    return this.http.put<Requests>(`${this.api}/${task.id}`, task);
  }

  delete(id: number) {
    return this.http.delete<Requests>(`${this.api}/${id}`);
  }
}
