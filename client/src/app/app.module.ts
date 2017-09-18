import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SearchService} from './search/search.service';
import {SearchComponent} from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { UpdateFavoritesComponent } from './update-favorites/update-favorites.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent,
    HeaderComponent,
    FavoritesComponent,
    UpdateFavoritesComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
