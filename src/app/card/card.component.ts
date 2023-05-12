import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  student = {
    hoten: 'Nguyễn Văn Chương',
    gioitinh: 'Nam',
    ngaysinh: '6/1/2003',
    anh: 'poly.jpeg',
    diemTB: 8.9,
  };
}
