import { Component } from '@angular/core';
import { FontIconsService } from '../services/fonticons.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  faFacebook = this.fontIconsService.faFacebook;
  faInstagram = this.fontIconsService.faInstagram;
  faGithub = this.fontIconsService.faGithub;
  faXTwitter = this.fontIconsService.faXTwitter;
  faSchool = this.fontIconsService.faSchool
  faBook = this.fontIconsService.faBook;
  faArrowDown = this.fontIconsService.faArrowDown;
  faEnvelope = this.fontIconsService.faEnvelope;
  faBookOpen = this.fontIconsService.faBookOpen;

  constructor(
    private fontIconsService: FontIconsService
  ){}
}
