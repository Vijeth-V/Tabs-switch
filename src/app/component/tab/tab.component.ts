import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  active: boolean = true;
}
