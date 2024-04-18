import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const arrowElements = this.elementRef.nativeElement.querySelectorAll('.arrow');
    
    for (let i = 0; i < arrowElements.length; i++) {
      arrowElements[i].addEventListener('click', (e:any) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
      });
    }
  }


}
