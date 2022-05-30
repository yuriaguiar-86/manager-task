
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Requests } from './model/requests';
import { RequestsService } from './services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: Requests[] = [];
  view = '../../assets/view.png';
  edit = '../../assets/edit.png';
  delete = '../../assets/excluir.png';

  constructor(private service: RequestsService) {

    this.service.list().pipe(catchError(error => {
      alert("ERRO! Entre em contato com o adm do sistema");
      return of([]);
    })).subscribe(requests => this.requests = requests);
  }

  ngOnInit(): void { }

  onDelete() {
    alert("ERRO! Entre em contato com o adm do sistema");
  }

  onUpdate() {
    alert("ERRO! Entre em contato com o adm do sistema");
  }
}
