import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-adiamento',
  templateUrl: './home-adiamento.page.html',
  styleUrls: ['./home-adiamento.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomeAdiamentoPage {

  constructor() { }

}
