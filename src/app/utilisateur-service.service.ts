import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  private apiUrl = "http://localhost:8080/api/utilisateurs"; // L'URL du backend

  constructor(private http: HttpClient) {}

  listeUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }
}
