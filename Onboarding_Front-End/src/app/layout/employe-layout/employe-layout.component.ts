import {Component} from '@angular/core';
import { navItems } from '../../-nav-employe';
import{Router}  from '@angular/router';
import {AuthentificationService} from '../../service/authentification.service';
import { Employe } from '../../module/employe';

@Component({
  selector: 'app-employe-layout',
  templateUrl: './employe-layout.component.html',
})
export class EmployeLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public  employe=null;
  constructor(private LogOutService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
    this.employe=JSON.parse(localStorage.getItem('user'));
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logOut(){
    this.LogOutService.logout();
    this.router.navigate(['/login']);
  }

}
