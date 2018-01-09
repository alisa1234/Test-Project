import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { FormsModule }   from '@angular/forms';

import { SocketService } from './socket.service';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';

const config: SocketIoConfig = { url: 'localhost:8988', options: {} };
const AppRoutes: Routes = [
  { path: '', component: TestPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        AppRoutes
    ),
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
