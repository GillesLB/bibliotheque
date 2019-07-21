import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyCIWS4wHFfVn_rX9tKdS9aIBoPxY0MPDss',
      authDomain: 'bibliotheque-43d53.firebaseapp.com',
      databaseURL: 'https://bibliotheque-43d53.firebaseio.com/',
      projectId: 'bibliotheque-43d53',
      storageBucket: 'bibliotheque-43d53.appspot.com',
    };
    firebase.initializeApp(config);
  }
}
