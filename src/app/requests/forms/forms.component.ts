import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Requests } from '../model/requests';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  forms: FormGroup;
  request: Requests;

  constructor(private service: RequestsService, private route: ActivatedRoute) {
    this.forms = new FormGroup({
      'priority': new FormControl(null),
      'description': new FormControl(null, Validators.required),
      'deadline': new FormControl(null, Validators.required),
      'client': new FormControl(null, Validators.required),
      'request': new FormControl(null, Validators.required),
      'responsible': new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void { }

  onSubmit(){
    this.service.save(this.forms.value).subscribe(
      result => alert("Task adicionada com sucesso!"),
      error => alert("ERRO! Não foi possível salvar a task."));
  }
}
