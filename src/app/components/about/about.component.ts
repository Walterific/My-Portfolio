import { Component } from '@angular/core';
import { FontIconsService } from '../services/fonticons.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faFacebook = this.fontIconsService.faFacebook;
  faInstagram = this.fontIconsService.faInstagram;
  faGithub = this.fontIconsService.faGithub;
  faXTwitter = this.fontIconsService.faXTwitter;
  faEnvelope = this.fontIconsService.faEnvelope;

  constructor(
    private fontIconsService: FontIconsService
  ){}
}
