import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuEnglishPageRoutingModule } from './menu-english-routing.module';

import { MenuEnglishPage } from './menu-english.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuEnglishPageRoutingModule
  ],
  declarations: [MenuEnglishPage]
})
export class MenuEnglishPageModule {}
