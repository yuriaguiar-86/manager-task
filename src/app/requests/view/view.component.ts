import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Requests } from '../model/requests';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  request: Requests;

  constructor(private service: RequestsService, private route: ActivatedRoute) {
    this.load();
  }

  ngOnInit(): void {
  }

  load() {
    const id = this.route.snapshot.params["id"];
    console.log(id);
    this.service.listById(id).pipe(catchError(error => {
      alert("ERRO! Entre em contato com o adm do sistema");
      return of();
    })).subscribe(request => this.request = request);
  }
}
