import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { PageCategoryComponent } from './page-category/page-category.component';

const routes: Routes = [
  {path:'',component:PagePrincipalComponent,},
  {path:'page-category',component:PageCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
