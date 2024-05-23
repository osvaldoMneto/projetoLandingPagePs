

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent} from './components/menu-bar/menu-bar.component';
import { TitleComponent } from './components/title/title.component';
import { CardsComponent } from './components/cards/cards.component';
import { MessageComponent } from './components/message/message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { SmallCardsComponent } from './components/small-cards/small-cards.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { UserAdminComponent } from './user-admin/user-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TitleComponent,
    CardsComponent,
    MessageComponent,
    HomeComponent,
    SmallCardsComponent,
    ActivitesComponent,
    UserAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
