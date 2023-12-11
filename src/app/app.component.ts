import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import movieData from './movie-data';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rancid';
  movies = movieData.movies;
  currentMovie: any = null;
  currentBackdrop: any = null

  setCurrentMovie(movie: any): void {
    this.currentMovie = movie;
    this.currentBackdrop = movie.backdrop_path;
  }
}
