import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { EmployeLayoutComponent } from './layout/employe-layout/employe-layout.component';
import { HrLayoutComponent } from './layout/hr-layout/hr-layout.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { ListManagerComponent } from './component/list-manager/list-manager.component';
import { ListEmployeComponent } from './component/list-employe/list-employe.component';
import { ListEquipeComponent} from './component/list-equipe/list-equipe.component';
import { ListPosteComponent} from './component/list-poste/list-poste.component';
import { ListEvenementComponent} from './component/list-evenement/list-evenement.component';
import { ListEmployeManagerComponent } from './component/list-employe-manager/list-employe-manager.component';
import { ListParticipationComponent } from './component/list-participation/list-participation.component';
import { ListDocumentComponent } from './component/list-document/list-document.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { ListMoyenComponent } from './component/list-moyen/list-moyen.component';
import { ListDemandeMoyenComponent } from './component/list-demande-moyen/list-demande-moyen.component';
import { DocumentNonRenduComponent } from './component/document-non-rendu/document-non-rendu.component';
import { MembreEquipeComponent } from './component/membre-equipe/membre-equipe.component';
import { ListNewEmployeComponent } from './component/list-new-employe/list-new-employe.component';
import { EmployeProfilComponent } from './component/employe-profil/employe-profil.component';
import { HrStatistiqueComponent } from './component/hr-statistique/hr-statistique.component';
import { HrProfilComponent } from './component/hr-profil/hr-profil.component';
import { ManagerProfilComponent } from './component/manager-profil/manager-profil.component';
import { DocumentNonRenduHrComponent } from './component/document-non-rendu-hr/document-non-rendu-hr.component';
import { EmployeStatistiqueComponent } from './component/employe-statistique/employe-statistique.component';
import { ManagerStatistiqueComponent } from './component/manager-statistique/manager-statistique.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'hr',
    component: HrLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children:[
      {
        path: 'listeEquipe',
        component: ListEquipeComponent,
        data: {
          title: 'La liste des équipes'
        }
      },{
        path: 'listePoste',
        component: ListPosteComponent,
        data: {
          title: 'La liste des postes'
        }
      }
      ,{
        path: 'listeManager',
        component: ListManagerComponent,
        data: {
          title: 'La liste des manager'
        }
      },
      {
        path: 'listeDocument',
        component: ListDocumentComponent,
        data: {
          title: 'La liste des documents'
        }
      }
      ,
      {
        path: 'listeDocumentNonRendu',
        component: DocumentNonRenduHrComponent,
        data: {
          title: 'La liste des documents non rendu'
        }
      },
      {
        path: 'listeEmploye',
        component: ListEmployeComponent,
        data: {
          title: 'La liste des employés'
        }
      }
      ,
      {
        path: 'statistique',
        component: HrStatistiqueComponent,
        data: {
          title: 'Statistique'
        }
      }
      ,
      {
        path: 'profil',
        component: HrProfilComponent,
        data: {
          title: 'Page de profil'
        }
      }
    ]
  },
  {
    path: 'employe',
    component: EmployeLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children:[
      {
        path: 'agenda',
        component: AgendaComponent,
        data: {
          title: 'L\'Agenda des évènements'
        }
      }
      ,
      {
        path: 'membreEquipe',
        component: MembreEquipeComponent,
        data: {
          title: 'Les membres d\'équipe'
        }
      }
      ,
      {
        path: 'notification',
        component: ListNewEmployeComponent,
        data: {
          title: 'Notification de nouveau employé'
        }
      }
      ,
      {
        path: 'profil',
        component: EmployeProfilComponent,
        data: {
          title: 'Profil'
        }
      }
      ,{
        path: 'documentNonRendu',
        component: DocumentNonRenduComponent,
        data: {
          title: 'Les documents non rendu'
        }
      }
      ,{
        path: 'statistique',
        component: EmployeStatistiqueComponent,
        data: {
          title: 'Statistique'
        }
      }
    ]
  },
  {
    path: 'manager',
    component: DefaultLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: 'listeEvenement',
        component: ListEvenementComponent,
        data: {
          title: 'La liste des évènements'
        }
      },
      {
        path: 'profil',
        component: ManagerProfilComponent,
        data: {
          title: 'La page de profil'
        }
      },
      {
        path: 'listeEmploye',
        component: ListEmployeManagerComponent,
        data: {
          title: 'La liste des employés de même service'
        }
      },
      {
        path: 'listeParticipation',
        component: ListParticipationComponent,
        data: {
          title: 'La liste des participations dans les évènements'
        }
      },
      {
        path: 'listeMoyen',
        component: ListMoyenComponent,
        data: {
          title: 'La liste des moyens'
        }
      },
      {
        path: 'listeDemandeMoyen',
        component: ListDemandeMoyenComponent,
        data: {
          title: 'La liste de demande de moyen'
        }
      },{
        path: 'demandeMoyen',
        component: ListDemandeMoyenComponent,
        data: {
          title: 'La demande de moyen'
        }
      }
      ,{
        path: 'statistique',
        component: ManagerStatistiqueComponent,
        data: {
          title: 'Statistique'
        }
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
