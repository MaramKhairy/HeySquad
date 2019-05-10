import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showNav: boolean;

  constructor(private auth: AuthService) {
    this.showNav = this.auth.isSignedIn();
    console.log('app.comp.ts init: ' + this.auth.isSignedIn());
  }

}
