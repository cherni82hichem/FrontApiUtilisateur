import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurServiceService } from '../utilisateur-service.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  utilisateurs : Utilisateur[] = [];

  constructor (private utilisateurService: UtilisateurServiceService){}

  ngOnInit(): void {
    this.utilisateurService.listeUtilisateurs().subscribe(
      (data) => {this.utilisateurs = data;
        console.log(data);
      },
      (error) => {
        // Gérez les erreurs ici
        console.log(error);
      }
    );
  
    //this.getUtilisateurs();
  }

  getUtilisateurs(): void{

    this.utilisateurService.listeUtilisateurs().subscribe(data => {this.utilisateurs = data;})

  }


}
