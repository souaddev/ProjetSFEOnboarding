import {Manager} from '../module/manager';
export class Evenement {
    id: number;
    nom: string;
    type: string;
    description: string;
    lieu:string;
    dateDebut:Date;
    dateFin:Date;
    manager:Manager;
}
