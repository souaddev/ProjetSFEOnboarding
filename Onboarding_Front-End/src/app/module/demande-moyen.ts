import { Employe } from './employe';
import { Moyen } from './moyen';
import { Manager } from './manager';

export class DemandeMoyen {
    id:number;
    employe:Employe;
    moyen:Moyen;
    manager:Manager;
    dateDemande:Date;
    valide:boolean;
}
