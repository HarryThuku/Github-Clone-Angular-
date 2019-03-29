import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {GitsearchService} from "./gitsearch.service";
import { RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoryDisplayComponent } from './repository-display/repository-display.component';
import { RepositorySearchbarComponent } from './repository-searchbar/repository-searchbar.component';
import { UserComponent } from './user/user.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { DateformatPipe } from './dateformat.pipe';

const appRoutes: Routes = [
  { path: 'Users', component: UserSearchComponent},
  { path: 'Repos', component:  RepositorySearchbarComponent},
  { path: 'user/:uname', component:  UserComponent},
  { path: '', redirectTo: 'user/HarryThuku',pathMatch: 'full'}
];

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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
