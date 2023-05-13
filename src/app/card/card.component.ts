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
    anh: 'https://media.newyorker.com/photos/5e4ef70761934700086187b8/1:1/w_1698,h_1698,c_limit/Younger-PopSmoke.jpg',
    diemTB: 8.9,
  };
}
