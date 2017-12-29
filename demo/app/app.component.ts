import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { StoreService } from '../../src/app/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  id: string = 'imeepos';
  constructor(
    public store: StoreService
  ) {

  }

  ngOnInit() {
    let a = { a: '1', b: 2, c: 3 };
    this.store.set('a', a);
    this.store.set('b', 2);
  }
}
