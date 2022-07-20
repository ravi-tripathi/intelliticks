import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProplistComponent } from './components/proplist/proplist.component';

const routes: Routes = [
  {path: '', component: ProplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
