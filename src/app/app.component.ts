import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Companies } from './companies';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'httpClientMethods';

  database: Companies[] = [];

  name!: string;
  ceo!: string;

  company: any = {};

  constructor(private apiService: ApiServiceService) {}

  //receiving data from postMethod to appComponent
  add(data: Companies[]) {
    console.log(data);
    this.display();
  }

  ngOnInit() {
    this.display();
  }

  display() {
    this.apiService.get().subscribe((data) => {
      console.log(data);
      this.database = data;
    });
  }

  edit(id: number) {
    this.apiService.getById(id).subscribe((response) => {
      console.log(response);
      this.company = response;
    });
  }

  updateCompany() {
    this.apiService
      .update(this.company.id, this.company)
      .subscribe((response) => {
        console.log(response);
        this.company = response;
        this.display();
        alert('Company data has updated successfully!');
      });
  }

  remove(id: number) {
    this.apiService.delete(id).subscribe((response) => {
      console.log(response);
      this.display();
    });
  }
}
