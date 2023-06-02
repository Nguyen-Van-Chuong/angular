import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './api/request.interceptors';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavBarComponent } from './layouts/category-nav-bar/category-nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { WatchMovieComponent } from './layouts/watch-movie/watch-movie.component';
import { BannerComponent } from './layouts/banner/banner.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SlideComponent } from './layouts/slide/slide.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

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
    WatchMovieComponent,
    BannerComponent,
    ProfileComponent,
    SlideComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
