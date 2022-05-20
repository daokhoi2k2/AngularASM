import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  handleFilterDuAn = (kq: any) => {
    console.log("QK", kq);
  }
  title = 'PS18239_DaoDucMinhKhoi_ASM';
}
