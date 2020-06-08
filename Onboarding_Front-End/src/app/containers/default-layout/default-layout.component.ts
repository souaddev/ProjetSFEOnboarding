import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import{Router}  from '@angular/router';
import {AuthentificationService} from '../../service/authentification.service';
import { Manager } from '../../module/manager';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public  manager=null;
  public  role=null;
  constructor(private LogOutService:AuthentificationService,private router:Router){
    this.manager=JSON.parse(localStorage.getItem('user'));
    this.role=JSON.parse(localStorage.getItem('role'));
    //console.log(this.manager.id);
  }
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logOut(){
    this.LogOutService.logout();
    this.router.navigate(['/login']);
  }
}
