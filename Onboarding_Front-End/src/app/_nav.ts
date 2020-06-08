import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Profil de manager'
  },
  {
    name: 'Page de Profil',
    url: '/manager/profil',
    icon: 'icon-user'
  },
  {
    title: true,
    name: 'Check-list'
  },
  {
    name: 'Demande des moyens',
    url: '/manager/demandeMoyen',
    icon: 'cui-task'
  },
  {
    title: true,
    name: 'Partie de gestion'
  },
  {
    name: 'Liste des évènements',
    url: '/manager/listeEvenement',
    icon: 'icon-pin'
  },
  {
    name: 'Liste de participation',
    url: '/manager/listeParticipation',
    icon: 'icon-list'
  },
  {
    name: 'Liste des employés',
    url: '/manager/listeEmploye',
    icon: 'icon-people'
  },
  {
    name: 'Liste des moyens',
    url: '/manager/listeMoyen',
    icon: 'icon-tag'
  },
  {
    name: 'Liste des demandes de moyen',
    url: '/manager/listeDemandeMoyen',
    icon: 'icon-bag'
  },
  {
    title: true,
    name: 'Autre'
  },
  {
    name: 'Statistique',
    url: '/manager/statistique',
    icon: 'icon-graph'
  },
  
  {
    name: 'Déconnexion',
    url: '/logOut',
    icon: 'icon-logout'
  }
];
