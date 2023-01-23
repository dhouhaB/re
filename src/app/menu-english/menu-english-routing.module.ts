import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuEnglishPage } from './menu-english.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEnglishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuEnglishPageRoutingModule {}
