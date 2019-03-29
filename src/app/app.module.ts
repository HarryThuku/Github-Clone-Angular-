import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoryDisplayComponent } from './repository-display/repository-display.component';
import { RepositorySearchbarComponent } from './repository-searchbar/repository-searchbar.component';
import { UserComponent } from './user/user.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { DateformatPipe } from './dateformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoryDisplayComponent,
    RepositorySearchbarComponent,
    UserComponent,
    UserDisplayComponent,
    UserSearchComponent,
    DateformatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
