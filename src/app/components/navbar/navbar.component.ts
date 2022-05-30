import { Component, EventEmitter, OnInit, Output, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { DuanService } from 'src/app/services/duan.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  searchKeyword: string = '';
  @Output() onFilterDuAn = new EventEmitter();
  constructor(private duanService: DuanService, private router: Router) {}
  handleSearch = () => {
    const kq = this.duanService.onFilter(this.searchKeyword);
    this.onFilterDuAn.emit(kq as any);
    console.log("Change");
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }
}
