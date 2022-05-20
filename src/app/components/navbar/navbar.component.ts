import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuanService } from 'src/app/services/duan.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  searchKeyword: string = '';
  @Output() onFilterDuAn = new EventEmitter();
  constructor(private duanService: DuanService) {}
  handleSearch = () => {
    const kq = this.duanService.onFilter(this.searchKeyword);
    this.onFilterDuAn.emit(kq as any);
  }
  ngOnInit(): void {
  }
}
