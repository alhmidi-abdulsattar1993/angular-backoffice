import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { QRCodeModule } from 'angularx-qrcode';


import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LoginComponent } from './components2/login/login.component';
import { AddTreeComponent } from './components/tree/add-tree/add-tree.component';
import { TreeDetailsComponent } from './components/tree/tree-details/tree-details.component';
import { TreesListComponent } from './components/tree/trees-list/trees-list.component';
import { AddBirdComponent } from './components/bird/add-bird/add-bird.component';
import { BirdDetailsComponent } from './components/bird/bird-details/bird-details.component';
import { BirdListComponent } from './components/bird/bird-list/bird-list.component';
import { AddSportComponent } from './components/sport/add-sport/add-sport.component';
import { SportDetailsComponent } from './components/sport/sport-details/sport-details.component';
import { SportListComponent } from './components/sport/sport-list/sport-list.component';
import { AddHandicapComponent } from './components/handicap/add-handicap/add-handicap.component';
import { HandicapDetailsComponent } from './components/handicap/handicap-details/handicap-details.component';
import { HandicapListComponent } from './components/handicap/handicap-list/handicap-list.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, LoginComponent, AddTreeComponent, TreeDetailsComponent, TreesListComponent, AddBirdComponent, BirdDetailsComponent, BirdListComponent,AddSportComponent,
    SportDetailsComponent,
    SportListComponent,AddHandicapComponent,
    HandicapDetailsComponent,
    HandicapListComponent,],
  imports: [
    QRCodeModule,
    NgxQRCodeModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    UtilitiesModule,
    ButtonGroupModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule, 

    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
