import { Employe } from './employe';

export class Document {
    id:number;
    label:String;
    dateRendu:Date;
    isValide:boolean;
    notifier:boolean;
    employe:Employe;
}
