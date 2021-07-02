import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  dummyJsonObject = {
    key: 'Copy your json here',
  };
  inputValue: string = JSON.stringify(this.dummyJsonObject);
}
