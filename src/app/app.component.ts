import { Component } from '@angular/core';
import { Covid19Service } from './covid19.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'covid';

  data: any;

  constructor(private covid19Services: Covid19Service) {
    this.getDataFromAPI();
  }

  public getDataFromAPI() {
    this.covid19Services.getData().subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
