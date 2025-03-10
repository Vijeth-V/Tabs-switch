import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  standalone: false,
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css',
})
export class TabGroupComponent {
  tabs: TabComponent[] = [
    { title: 'Tab 1', content: 'This is the content of Tab 1.', active: true },
    { title: 'Tab 2', content: 'This is the content of Tab 2.', active: false },
    { title: 'Tab 3', content: 'This is the content of Tab 3.', active: false },
  ];

  selectedTab(selectedTab: TabComponent): void {
    // Deactivate all tabs
    this.tabs.forEach((tab) => (tab.active = false));

    // Activate the selected tab
    selectedTab.active = true;
  }
}
