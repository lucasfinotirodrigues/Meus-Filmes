import { Component, Input, WritableSignal, inject, signal } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { MovieResult } from '../services/interface';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline } from 'ionicons/icons';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonItem,
    CurrencyPipe,
    DatePipe,
  ],
})
export class DetalhesPage {
  public filmesService = inject(FilmesService);
  public imageBaseURL = 'http://image.tmdb.org/t/p';
  public filme: WritableSignal<MovieResult | null> = signal<MovieResult | null>(
    null,
  );

  @Input()
  set id(filmeId: string) {
    this.filmesService.getDetalhesFilmes(filmeId).subscribe((filme) => {
      console.log(filme);
      this.filme.set(filme);
    })
  }

  constructor() {
    addIcons({
      cashOutline,
      calendarOutline
    })
  }

}
