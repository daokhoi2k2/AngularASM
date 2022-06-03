import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { DuanService } from 'src/app/services/duan.service';

@Component({
  selector: 'app-duan-detail',
  templateUrl: './duan-detail.component.html',
  styleUrls: ['./duan-detail.component.scss'],
})
export class DuanDetailComponent implements OnInit {
  id: any = '';
  duanDetail = {} as DuAn;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private duanServices: DuanService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.duanServices.getDuAn(this.id).subscribe((data) => {
      this.duanDetail = data;
    });
  }
}
