import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  privateMenu: boolean;
  username: string;

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.service.isLogged().subscribe((b) => (this.privateMenu = b));
    this.service.getUsername().subscribe((u) => (this.username = u));
  }
  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
