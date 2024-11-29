import { Component } from '@angular/core';
import { FontIconsService } from '../app/components/services/fonticons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-personal-portfolio';

  faFacebook = this.fontIconsService.faFacebook;
  faInstagram = this.fontIconsService.faInstagram;
  faGithub = this.fontIconsService.faGithub;
  faTwitter = this.fontIconsService.faTwitter;
  faSchool = this.fontIconsService.faSchool
  faBook = this.fontIconsService.faBook;

  constructor(
    private fontIconsService: FontIconsService
  ){}

}
