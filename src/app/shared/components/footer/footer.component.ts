import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  showScrollTop: boolean = false;

  ngOnInit() {}

  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    this.showScrollTop = window.scrollY >= 50;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}