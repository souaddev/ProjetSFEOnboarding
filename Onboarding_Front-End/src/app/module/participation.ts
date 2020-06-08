import { Evenement } from './evenement';
import { Employe } from './employe';

export class Participation {
    id:number;
    employe:Employe;
    evenement:Evenement;
    dateParticipation:Date;
}
