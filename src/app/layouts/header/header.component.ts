import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      let header = document.querySelector('#header');
      header?.classList.toggle('bg-slate-700', window.scrollY > 50);
    });
  }
}
