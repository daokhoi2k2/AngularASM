import { Injectable } from '@angular/core';
import { DuAn } from '../du-an';

@Injectable({
  providedIn: 'root',
})
export class DuanService {
  listDuAn: DuAn[] = [
    {
      id: 1,
      tenDuAn: 'Quản lý trại heo',
      ngayStart: '2022-03-91',
      tien: 67000000,
      leader: 1,
      thanhvien: [1, 3, 4],
    },
    {
      id: 2,
      tenDuAn: 'Cây xanh công viên',
      ngayStart: '2022-84-92',
      tien: 98500000,
      leader: 1,
      thanhvien: [1, 3, 4],
    },
    {
      id: 3,
      tenDuAn: 'Website Văn hóa Việt',
      ngayStart: '2022-04-15',
      tien: 35000000,
      leader: 2,
      thanhvien: [2, 4, 1],
    },
    {
      id: 4,
      tenDuAn: 'Website Du lich Bui',
      ngayStart: '2022-04-21',
      tien: 75500000,
      leader: 2,
      thanhvien: [2, 4],
    },
    {
      id: 5,
      tenDuAn: 'Quản lý nhà thuốc Vĩnh An',
      ngayStart: '2022-05-2',
      tien: 97900000,
      leader: 3,
      thanhvien: [3, 4],
    },
    {
      id: 6,
      tenDuAn: 'Chăm sóc thú cưng',
      ngayStart: '2022-02-11',
      tien: 18990990,
      leader: 3,
      thanhvien: [3, 4],
    },
  ];

  onFilter = (searchKeyword: string) => {
    const result = this.listDuAn.filter((item) => {
      const reg = new RegExp(searchKeyword);
      if (item.tenDuAn.toLowerCase().search(reg) !== -1) {
        return 1;
      }

      return 0;
    });

    return result;
  };

  deleteDuAn = (id: number) => {
    this.listDuAn = this.listDuAn.filter((item) => {
      return item.id !== id;
    });
  };

  pushDuAn = () => {
    this.listDuAn.push({
      id: 3,
      tenDuAn: 'Website Văn hóa Việt',
      ngayStart: '2022-04-15',
      tien: 35000000,
      leader: 2,
      thanhvien: [2, 4, 1],
    })
  }

  constructor() {}
}
