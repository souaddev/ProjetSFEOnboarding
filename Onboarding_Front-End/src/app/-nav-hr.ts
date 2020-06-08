import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Profil d\'agent HR'
  },
  {
    name: 'Page de Profil',
    url: '/hr/profil',
    icon: 'icon-user'
  },
  {
    title: true,
    name: 'Document'
  },
  {
    name: 'Document Non-rendu',
    url: '/hr/listeDocumentNonRendu',
    icon: 'icon-ban'
  },
  {
    name: 'Liste de documents',
    url: '/hr/listeDocument',
    icon: 'icon-docs'
  },
  {
    title: true,
    name: 'Partie de gestion'
  },
  {
    name: 'Gestion des employés',
    url: '/hr/listeEmploye',
    icon: 'icon-user-follow'
  },
  {
    name: 'Gestion des manager',
    url: '/hr/listeManager',
    icon: 'fa fa-street-view'
  },
  {
    name: 'Gestion des équipes',
    url: '/hr/listeEquipe',
    icon: 'fa fa-group'
  },
  {
    name: 'Gestion des postes',
    url: '/hr/listePoste',
    icon: 'fa fa-suitcase'
  },
  {
    title: true,
    name: 'Autre'
  },
  {
    name: 'Statistique',
    url: '/hr/statistique',
    icon: 'icon-graph'
  },
  
  {
    name: 'Déconnexion',
    url: '/logOut',
    icon: 'icon-logout'
  }
];
