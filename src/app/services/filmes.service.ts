import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResult, MovieResult } from './interface';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e9ef7085687804a240618d39fe5e8c23'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getTopFilmes(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`);
  }

  getDetalhesFilmes(id: string): Observable<MovieResult>{
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  }
}
