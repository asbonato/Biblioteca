import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroDetalhePage } from './livro-detalhe';

@NgModule({
  declarations: [
    LivroDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(LivroDetalhePage),
  ],
})
export class LivroDetalhePageModule {}
