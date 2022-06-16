import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DuanService } from 'src/app/services/duan.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  searchKeyword: string = '';
  isLogged: boolean = false;
  me: any;
  @Output() onFilterDuAn = new EventEmitter();
  constructor(
    private duanService: DuanService,
    private router: Router,
    private authService: AuthService
  ) {}
  handleSearch = () => {
    this.router.navigate(['/']);
  };

  handleLogout = () =>{
    this.authService.thoat();
  }

  ngOnInit(): void {
    this.me = this.authService.getMe();
    this.isLogged = this.authService.daDangNhap();
  }

  ngDoCheck() {
    this.me = this.authService.getMe();
    this.isLogged = this.authService.daDangNhap();
  }
}
