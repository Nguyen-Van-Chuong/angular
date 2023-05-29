import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  slides = [
    {
      img: 'https://img1.ak.crunchyroll.com/i/spire3/d23bea1cbe84833135f94695d900f0651651339079_main.png',
    },
    {
      img: 'https://i.pinimg.com/736x/a2/98/16/a29816cd63e5d731cc70cfd3f88c2ce8.jpg',
    },
    {
      img: 'https://www.gamespot.com/a/uploads/screen_kubrick/1603/16030002/4111613-mha-01.png',
    },
    {
      img: 'https://i.guim.co.uk/img/media/f4bcbb402a40f19f4916f38b7f918b2a9e69afd0/0_180_5700_3420/500.jpg?quality=85&auto=format&fit=max&s=7bf60bd85cefc78c6eb4cd5294cc8551',
    },
    {
      img: 'https://img1.ak.crunchyroll.com/i/spire3/d23bea1cbe84833135f94695d900f0651651339079_main.png',
    },
    {
      img: 'https://img1.ak.crunchyroll.com/i/spire3/d23bea1cbe84833135f94695d900f0651651339079_main.png',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
        },
      },
    ],
  };
}
