import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Companies } from '../companies';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-method',
  templateUrl: './post-method.component.html',
  styleUrls: ['./post-method.component.css'],
})
export class PostMethodComponent {
  @Output() add = new EventEmitter<Companies[]>();

  constructor(private apiService: ApiServiceService) {}

  name = '';
  ceo = '';
  id = 0;

  companies = {
    id: 0,
    name: '',
    ceo: '',
  };

  create() {
    this.apiService.post(this.companies).subscribe((response) => {
      this.add.emit(response);
      alert('Company data has updated successfully!');
      // console.log(response);
      this.name = '';
      this.ceo = '';
    });
  }
}
