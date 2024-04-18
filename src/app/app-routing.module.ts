import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MyContactListComponent } from './pages/my-contact-list/my-contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { TokenGuardService } from './services/guard/token-guard/token-guard.service';
import { AdminGuardService } from './services/guard/admin-guard/admin-guard.service';
import { AccessDeinedComponent } from './pages/access-deined/access-deined.component';
import { HomeComponent } from './home/home.component';
import { Profile2Component } from './dashboard/profile/profile.component';
import { ManageComponent } from './dashboard/manage/manage.component';
import { JourneyComponent } from './dashboard/journey/journey.component';
import { BuyComponent } from './dashboard/buy/buy.component';
import { ProductDetailsComponent } from './dashboard/product-details/product-details.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'confirm-register',
    component: ConfirmRegisterComponent
  },
  {
    path: 'access-denied',
    component: AccessDeinedComponent
  },
  {
    path: 'user',
    component: MainPageComponent,
    canActivate: [TokenGuardService],
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'my-transactions',
        component: MyTransactionsComponent
      },
      {
        path: 'my-contact-list',
        component: MyContactListComponent
      },
      {
        path: 'new-transaction',
        component: NewTransactionComponent
      },
    
      {
        path: 'new-contact/:idContact',
        component: NewContactComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }, {
        path: "manage",
        component: ManageComponent
    },
    {
        path: "journey",
        component: JourneyComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "buy",
        component: BuyComponent
    }, {
        path: "details",
        component: ProductDetailsComponent
    },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    component: MainAdminPageComponent,
    canActivate: [AdminGuardService, TokenGuardService],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'customers',
        component: ManageUsersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
