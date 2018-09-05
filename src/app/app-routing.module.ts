import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './product/detail/detail.component';
import { ListComponent } from './product/list/list.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routConfig: Routes = [

    { path: '', component: HomeComponent },
    { path: 'product/list', component: ListComponent },
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
