import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MyPurchasesType } from '../models/movie-app-data/my-purchases-type';
import { MovieAppDataService } from '../services/movie-app-data.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.scss']
})
export class MyPurchasesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public movieAppDataMyPurchases: MyPurchasesType[] = [];

  constructor(
    private movieAppDataService: MovieAppDataService,
  ) {}

  ngOnInit() {
    this.movieAppDataService.getMyPurchasesList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.movieAppDataMyPurchases = data,
      error: (_err: any) => this.movieAppDataMyPurchases = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
