import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent, IonList, IonItem, IonSkeletonText,IonAvatar, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { FilmesService } from '../services/filmes.service';
import { catchError, finalize } from 'rxjs';
import { MovieResult } from '../services/interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonSkeletonText,IonAvatar,
    IonAlert,
    IonLabel,
    DatePipe,
    RouterModule,
    IonBadge,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  ],
})
export class HomePage {
  private filmeService = inject(FilmesService);
  private paginaAtual = 1;
  public error = null;
  public isLoading = false;
  public filmes: MovieResult[] = [];
  public dummyArray = new Array(5);
  public imageBaseURL = 'http://image.tmdb.org/t/p'

  constructor() {
    this.carregarFilmes();
  }

  carregarFilmes(event?: InfiniteScrollCustomEvent) {
    this.error = null;

    if(!event){
    this.isLoading = true;
    }

    this.filmeService.getTopFilmes(this.paginaAtual).pipe(
      finalize(() =>{
        this.isLoading = false;
        if(event) {
          event.target.complete();
        }
      }),
      catchError((err: any) => {
        console.log(err);

        this.error = err.error.status_message;
        return []
      }),
    ).subscribe({
      next: (res) => {
        console.log(res);

        this.filmes.push(...res.results);
        if(event) {
          event.target.disabled = res.total_pages === this.paginaAtual;
        }
      }
    })
  }

  carregarMais(event: InfiniteScrollCustomEvent) {
    this.paginaAtual++;
    this.carregarFilmes(event);
  }
}
