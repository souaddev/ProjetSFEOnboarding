import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import {trigger,state,style,animate,transition}from '@angular/animations';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent,
  EmployeLayoutComponent,
  HrLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ListManagerComponent } from './component/list-manager/list-manager.component';

//service
import {ManagerService} from './service/manager.service';
import {EmployeService} from './service/employe.service';
import { ListEmployeComponent } from './component/list-employe/list-employe.component';
import { ListEquipeComponent } from './component/list-equipe/list-equipe.component';
import { ListPosteComponent } from './component/list-poste/list-poste.component';
import { ListEvenementComponent } from './component/list-evenement/list-evenement.component';
import { EmployeLayoutComponent } from './layout/employe-layout/employe-layout.component';
import { HrLayoutComponent } from './layout/hr-layout/hr-layout.component';
import { ListEmployeManagerComponent } from './component/list-employe-manager/list-employe-manager.component';
import { ListParticipationComponent } from './component/list-participation/list-participation.component';
import { ListDocumentComponent } from './component/list-document/list-document.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { ListMoyenComponent } from './component/list-moyen/list-moyen.component';
import { ListDemandeMoyenComponent } from './component/list-demande-moyen/list-demande-moyen.component';
import { DocumentNonRenduComponent } from './component/document-non-rendu/document-non-rendu.component';
import { MembreEquipeComponent } from './component/membre-equipe/membre-equipe.component';
import { ListNewEmployeComponent } from './component/list-new-employe/list-new-employe.component';
import { HrStatistiqueComponent } from './component/hr-statistique/hr-statistique.component';
import { EmployeProfilComponent } from './component/employe-profil/employe-profil.component';
import { HrProfilComponent } from './component/hr-profil/hr-profil.component';
import { ManagerProfilComponent } from './component/manager-profil/manager-profil.component';
import { ManagerStatistiqueComponent } from './component/manager-statistique/manager-statistique.component';
import { EmployeStatistiqueComponent } from './component/employe-statistique/employe-statistique.component';
import { DocumentNonRenduHrComponent } from './component/document-non-rendu-hr/document-non-rendu-hr.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    BrowserModule,
    AlertModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ListManagerComponent,
    ListEmployeComponent,
    ListEquipeComponent,
    ListPosteComponent,
    ListEvenementComponent,
    EmployeLayoutComponent,
    HrLayoutComponent,
    ListEmployeManagerComponent,
    ListParticipationComponent,
    ListDocumentComponent,
    AgendaComponent,
    ListMoyenComponent,
    ListDemandeMoyenComponent,
    DocumentNonRenduComponent,
    MembreEquipeComponent,
    ListNewEmployeComponent,
    HrStatistiqueComponent,
    EmployeProfilComponent,
    HrProfilComponent,
    ManagerProfilComponent,
    ManagerStatistiqueComponent,
    EmployeStatistiqueComponent,
    DocumentNonRenduHrComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },ManagerService,EmployeService, {provide: LOCALE_ID, useValue: "fr-CA" } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
