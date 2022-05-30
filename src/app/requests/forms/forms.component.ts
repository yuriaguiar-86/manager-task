import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  forms: FormGroup;

  constructor(private service: RequestsService) {
    this.forms = new FormGroup({
      'priority': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'deadline': new FormControl(null, Validators.required),
      'client': new FormControl(null, Validators.required),
      'request': new FormControl(null, Validators.required),
      'responsible': new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void { }

  onSubmit(){
    this.service.save(this.forms.value).subscribe(
      result => alert("Task adicionada com sucesso!"),
      error => alert("ERRO! Não foi possível salvar a task."));
  }
}
