import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenLibraryPage } from './open-library';

@NgModule({
  declarations: [
    OpenLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenLibraryPage),
  ],
})
export class OpenLibraryPageModule {}
