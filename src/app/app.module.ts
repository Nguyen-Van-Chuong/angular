import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavBarComponent } from './layouts/category-nav-bar/category-nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { WatchMovieComponent } from './layouts/watch-movie/watch-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavBarComponent,
    FooterComponent,
    HomeComponent,
    MovieDetailsComponent,
    CommentListComponent,
    PostCardComponent,
    WatchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
