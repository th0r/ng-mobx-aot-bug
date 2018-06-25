import { ChangeDetectionStrategy, Component } from '@angular/core';
import { observable, action } from 'mobx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @observable title = 'Click `Change title` button to ensure that app works';

  @action changeTitle() {
    this.title = 'New title';
  }
}
