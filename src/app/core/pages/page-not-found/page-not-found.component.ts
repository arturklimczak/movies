import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  playerStatus: string = 'loading';

  movie = {
    "id": "uC-_Gon2p9M",
    "title": "Green Book",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sit amet odio ac porttitor. Cras facilisis magna volutpat erat mollis, a malesuada ante rutrum. Ut eget ex non dui ullamcorper vulputate. Mauris metus risus, consequat in metus at, volutpat mattis est.",
    "thumb_url": "http://i3.ytimg.com/vi/uC-_Gon2p9M/hqdefault.jpg",
    "movie_url": "https://www.youtube.com/embed/uC-_Gon2p9M",

    "year": 2017,
    "duration": 99,
    "rate": 10
  };

  constructor() { }

  ngOnInit() {
  }

  handleStatus(event) {
    console.log(event);
    switch (event.status) {
      case 'playing':
        this.playerStatus = 'Player is playing';
        break;
      case 'paused':
        this.playerStatus = 'Player is paused';
        break;
      default:
        this.playerStatus = 'Player is idle';
    }
  }

}
