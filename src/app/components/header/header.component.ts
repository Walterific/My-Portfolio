import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { FontIconsService } from '../services/fonticons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  isDarkMode = false;
  lastScrollTop = 0;

  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navToggle') navToggle!: ElementRef;
  @ViewChild('navClose') navClose!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('navList') navList!: ElementRef;


  faSun = this.fontIconsService.faSun;
  faMoon = this.fontIconsService.faMoon;
  faBars = this.fontIconsService.faBars;
  faX = this.fontIconsService.faX;
  faCaretDown = this.fontIconsService.faCaretDown;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private fontIconsService: FontIconsService
  ) {}

  ngAfterViewInit() {
    this.setupMenuToggle();
    this.loadTheme();
    this.setupScrollEvent();
    this.setupDocumentClickListener();
  }

  private setupMenuToggle() {
    if (this.navToggle) {
      this.navToggle.nativeElement.addEventListener('click', () => {
        this.navMenu.nativeElement.classList.add('show-menu');
      });
    }

    if (this.navClose) {
      this.navClose.nativeElement.addEventListener('click', () => {
        this.navMenu.nativeElement.classList.remove('show-menu');
      });
    }
  }

  private setupDocumentClickListener() {
    this.renderer.listen('document', 'click', (event: Event) => {
      const clickedElement = event.target as HTMLElement;
      if (
        this.navMenu && 
        this.navList &&
        !this.navList.nativeElement.contains(clickedElement) && 
        !this.navToggle.nativeElement.contains(clickedElement)
      ) {
        this.navMenu.nativeElement.classList.remove('show-menu');
      }
    });
  }

  closeMenu() {
    if (this.navMenu) {
      this.navMenu.nativeElement.classList.remove('show-menu');
    }
  }

  toggleTheme() {
    const mainElement = this.hostElement.nativeElement.closest('main');

    if (mainElement) {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        this.renderer.addClass(mainElement, 'dark-theme');
        localStorage.setItem('selected-theme', 'dark');
      } else {
        this.renderer.removeClass(mainElement, 'dark-theme');
        localStorage.setItem('selected-theme', 'light');
      }
    }
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('selected-theme');
    const mainElement = this.hostElement.nativeElement.closest('main');
    if (savedTheme === 'dark' && mainElement) {
      this.isDarkMode = true;
      this.renderer.addClass(mainElement, 'dark-theme');
    }
  }

  private setupScrollEvent() {
    this.renderer.listen('window', 'scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        this.renderer.setStyle(this.header.nativeElement, 'top', '-80px');
      } else {
        this.renderer.setStyle(this.header.nativeElement, 'top', '0');
      }
      this.lastScrollTop = scrollTop;
    });
  }
}
