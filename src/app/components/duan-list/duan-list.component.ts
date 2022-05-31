import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { DuanService } from 'src/app/services/duan.service';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.scss'],
})
export class DuanListComponent implements OnInit {
  listDuAn: DuAn[] = [];
  constructor(private duanService: DuanService, private router: Router) {
    this.listDuAn = duanService.listDuAn;
  }

  handleDeleteDuAn = (e: Event, id: number) => {
    e.stopPropagation();
    this.duanService.deleteDuAn(id);
    // this.router.navigate(['/']);
  };

  pushDuAn() {
    // this.duanService.pushDuAn();
  }

  ngDoCheck() {
    this.listDuAn = this.duanService.listDuAn;
  }

  ngOnInit(): void {}
}
