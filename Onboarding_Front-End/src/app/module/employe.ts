import {Poste} from '../module/poste';
import {Equipe} from '../module/equipe';

export class Employe {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    cin:string;
    adresse:string;
    tel:string;
    sexe:string;
    dateNaissance:Date;
    dateRecrutement:Date;
    motPasse: string;
    poste:Poste;
    equipe:Equipe;
}
