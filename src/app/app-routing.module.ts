import { Component, Injectable, NgModule } from '@angular/core';
import {
  ResolveFn,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { Title } from '@angular/platform-browser';
import { SearchComponent } from './layouts/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'search', component: SearchComponent, title: '' },
  {
    path: 'movie',
    children: [
      {
        path: 'movie-list',
        component: MovieListComponent,
        title: 'List movie',
      },
      {
        path: 'movie-detail/:id',
        component: MovieDetailsComponent,
        title: 'Detail',
      },
    ],
  },

  {
    path: 'tv',
    children: [
      { path: 'tv-list', component: MovieListComponent, title: 'List tv' },
      {
        path: 'movie-detail/:id',
        component: MovieDetailsComponent,
        title: 'Detail',
      },
    ],
  },
  {
    path: 'type/:genre',
    component: MovieListComponent,
    title: 'Detail',
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailsComponent,
    title: 'Detail',
  },
  { path: 'profile', component: ProfileComponent },
];
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Anonime | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
