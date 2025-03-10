import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabGroupComponent } from './component/tab-group/tab-group.component';
import { TabComponent } from './component/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
