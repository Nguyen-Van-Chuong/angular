import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { WatchMovieComponent } from './layouts/watch-movie/watch-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'post-card', component: PostCardComponent },
  { path: 'movie', component: WatchMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
