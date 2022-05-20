import { Component, OnInit } from '@angular/core';
import { DuAn } from 'src/app/du-an';
import { DuanService } from 'src/app/services/duan.service';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.scss'],
})
export class DuanListComponent implements OnInit {
  listDuAn: DuAn[] = []
  constructor(private duanService: DuanService) {
    this.listDuAn = duanService.listDuAn;
  }

  ngOnInit(): void {}
}
