import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLogged: Boolean = false;

  constructor(private authservice:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.isUserLogged = this.authservice.isUserLogged();
    this.router.navigate(['/home']);
  }
  logout(): void {
    this.authservice.logout();
    this.isUserLogged = false;
    window.location.reload();
  }

}
