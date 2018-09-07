import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/product/list/list.component';
import { DetailComponent } from './component/product/detail/detail.component';
import { CartComponent } from './component/cart/cart.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routConfig: Routes = [

    { path: '', component: HomeComponent },
    { path: 'product/list', component: ListComponent},
    { path: 'product/detail/:id', component: DetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent },
    // { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routConfig),
        FormsModule, ReactiveFormsModule
    ],
    exports: [RouterModule]
})

export class AppRouterModule { }
