import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import { FirebaseListObservable} from 'angularfire2/database-deprecated';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Observable<any[]>;

  constructor(private afDB: AngularFireDatabase) {
    //this.items = afDB.list('/users').valueChanges();
    this.items = afDB.list('/users').snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });;
  }
}
