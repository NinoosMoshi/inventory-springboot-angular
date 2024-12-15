import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './components/category/category.component';
import { GuardService } from './service/guard.service';
import { SupplierComponent } from './components/supplier/supplier.component';
import { AddEditSupplierComponent } from './components/add-edit-supplier/add-edit-supplier.component';
import { ProductComponent } from './components/product/product.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SellComponent } from './components/sell/sell.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'category', component: CategoryComponent, canActivate:[GuardService], data: {requiresAdmin: true} },

  { path: 'supplier', component: SupplierComponent, canActivate:[GuardService], data: {requiresAdmin: true} },
  { path: 'edit-supplier/:supplierId', component: AddEditSupplierComponent, canActivate:[GuardService], data: {requiresAdmin: true} },
  { path: 'add-supplier', component: AddEditSupplierComponent, canActivate:[GuardService], data: {requiresAdmin: true} },

  { path: 'product', component: ProductComponent, canActivate:[GuardService], data: {requiresAdmin: true} },
  { path: 'edit-product/:productId', component: AddEditProductComponent, canActivate:[GuardService], data: {requiresAdmin: true} },
  { path: 'add-product', component: AddEditProductComponent, canActivate:[GuardService], data: {requiresAdmin: true} },


  { path: 'purchase', component: PurchaseComponent, canActivate:[GuardService] },
  { path: 'sell', component: SellComponent, canActivate:[GuardService] },

  { path: 'transaction', component: TransactionComponent, canActivate:[GuardService] },
  { path: 'transaction/:transactionId', component: TransactionDetailsComponent, canActivate:[GuardService] },


  { path: 'profile', component: ProfileComponent, canActivate:[GuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate:[GuardService] },

//   WIDE CARD
    {path: "", redirectTo: "/login", pathMatch: 'full'},
    // {path: "**", redirectTo: "/dashboard"}
  
];
