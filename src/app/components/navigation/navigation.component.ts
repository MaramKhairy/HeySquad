import { Component, OnInit, ViewChild } from '@angular/core';
import { UTILS } from 'src/app/utils/utils';
import { AuthService } from 'src/app/services/auth.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  currentTime = UTILS.getCurrentTime();
  daytimeGreeting = UTILS.getDaytimeGreeting();
  displayName = UTILS.getDisplayName();
  screenWidth = UTILS.getScreenWidth();
  isSmallScreen: boolean = this.screenWidth < 840;


  constructor(private auth: AuthService) {

  }

  ngOnInit() {
  }

  logoutViaNavButton() {
    this.auth.logout();
    console.log('Logged out via nav button.');
  }

  closeSidenavOnSmallScreen() {
    if (this.isSmallScreen) {
      this.sidenav.close();
    }
  }
}
