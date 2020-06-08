import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Profil de l\'employé'
  },
  {
    name: 'Page de Profil',
    url: '/employe/profil',
    icon: 'icon-user'
  },
  {
    title: true,
    name: 'Agenda'
  },
  {
    name: 'Agenda d\'évènement',
    url: '/employe/agenda',
    icon: 'icon-calendar'
  },
  {
    title: true,
    name: 'Service'
  },
  {
    name: 'Membre d\'équipe',
    url: '/employe/membreEquipe',
    icon: 'icon-people'
  },
  {
    title: true,
    name: 'Notification'
  },
  {
    name: 'Nouveau membre',
    url: '/employe/notification',
    icon: 'icon-user-follow'
  },
  {
    name: 'Document non rendu',
    url: '/employe/documentNonRendu',
    icon: 'icon-docs'
  },
  {
    title: true,
    name: 'Autre'
  },
  {
    name: 'Statistique',
    url: '/employe/statistique',
    icon: 'icon-graph'
  },
  
  {
    name: 'Déconnexion',
    url: '/logOut',
    icon: 'icon-logout'
  }
];
