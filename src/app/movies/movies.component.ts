import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TheatresNearYouType } from '../models/movie-app-data/theatres-near-you-type';
import { MovieListType } from '../models/movie-app-data/movie-list-type';
import { ShowtimesType } from '../models/movie-app-data/showtimes-type';
import { TheatresType } from '../models/movie-app-data/theatres-type';
import { NowPlayingType } from '../models/movie-app-data/now-playing-type';
import { MovieAppDataService } from '../services/movie-app-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public movieAppDataNowPlaying: NowPlayingType[] = [];
  public value: string = '1';
  public movieAppDataMovieList: MovieListType[] = [];
  public movieAppDataTheatres: TheatresType[] = [];
  public movieAppDataShowtimes: ShowtimesType[] = [];
  public movieAppDataTheatresNearYou: TheatresNearYouType[] = [];

  constructor(
    private movieAppDataService: MovieAppDataService,
  ) {}

  ngOnInit() {
    this.movieAppDataService.getNowPlayingList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.movieAppDataNowPlaying = data,
      error: (_err: any) => this.movieAppDataNowPlaying = []
    });
    this.movieAppDataService.getMovieListList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.movieAppDataMovieList = data,
      error: (_err: any) => this.movieAppDataMovieList = []
    });
    this.movieAppDataService.getTheatresList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.movieAppDataTheatres = data,
      error: (_err: any) => this.movieAppDataTheatres = []
    });
    this.movieAppDataService.getShowtimesList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.movieAppDataShowtimes = data,
      error: (_err: any) => this.movieAppDataShowtimes = []
    });
    this.movieAppDataService.getTheatresNearYouList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.movieAppDataTheatresNearYou = data,
      error: (_err: any) => this.movieAppDataTheatresNearYou = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
