/**
 * Created by JunaidA on 4/19/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'add-form',
  templateUrl: 'add-form.component.html',
  styleUrls: ['./add-form.component.css']

})

export class AddForm {

  persons = [];

  constructor() {
    this.persons = [{"name": "junaid", "address": "Faisal,lahore", "phone": "0345782555"},
      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},
      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},


      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},
      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},
      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},
      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},
      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},{"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},
      {"name": "fahad noor", "address": "bahria,lahore", "phone": "0345782555"},
    ];
  }
}
