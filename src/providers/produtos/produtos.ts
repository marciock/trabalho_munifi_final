import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  itemsRef: AngularFireList<any>;

  constructor(protected db: AngularFireDatabase) {
    this.itemsRef = db.list('produto');
  }
  // retorna uma promisse de local, nao é real time
  getAllPromisse(): Promise<any> {
    return new Promise((resolve) => {
       this.itemsRef.snapshotChanges().subscribe(items => resolve(items));
    });
  }
  // retorna um observable real time da lista de local
  getAll() {
    return this.itemsRef.snapshotChanges();
  }


  // exemplo como retornar apenas um registro passando o ID
  retornaUm(id):any {
    return this.db.object( 'produto/'+ id).valueChanges();
  }

  //insere um local
  insere(obj){
    this.itemsRef.push(obj);
  }


}
