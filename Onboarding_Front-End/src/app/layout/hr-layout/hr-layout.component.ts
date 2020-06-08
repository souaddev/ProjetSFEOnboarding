import {Component} from '@angular/core';
import { navItems } from '../../-nav-hr';
import{Router}  from '@angular/router';
import {AuthentificationService} from '../../service/authentification.service';
import { RessourceHumaine } from '../../module/ressource-humaine';

@Component({
  selector: 'app-hr-layout',
  templateUrl: './hr-layout.component.html',
  styles: [
  ]
})
export class HrLayoutComponent {

  public sidebarMinimized = false;
  public navItems = navItems;
  public  hr=null;
  constructor(private LogOutService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
    this.hr=JSON.parse(localStorage.getItem('user'));
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logOut(){
    this.LogOutService.logout();
    this.router.navigate(['/login']);
  }

}
