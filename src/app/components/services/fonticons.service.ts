import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faX, faSchool, faBook, faLink, faCaretDown, faArrowDown, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faTwitter, faXTwitter} from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class FontIconsService {
  faMoon = faMoon;
  faSun = faSun;
  faBars = faBars;
  faX = faX;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faSchool = faSchool;
  faBook = faBook;
  faLink = faLink;
  faCaretDown = faCaretDown;
  faArrowDown = faArrowDown;
  faEnvelope = faEnvelope;
  faBookOpen = faBookOpen;
  faXTwitter = faXTwitter;


  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faMoon, faSun, faBars, faX, faFacebook, faInstagram, faGithub, faTwitter, faSchool, faBook, faLink, faCaretDown, faArrowDown, faEnvelope, faBookOpen, faXTwitter);
  }
}
