import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { LightInfoComponent } from './components/light-info/light-info.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { MyContactListComponent } from './pages/my-contact-list/my-contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FirstService } from './services/first-service/first.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { AccessDeinedComponent } from './pages/access-deined/access-deined.component';
import { ChartsModule } from 'ng2-charts';
import { DatepickerModule } from 'ng2-datepicker';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialExampleModule } from 'src/material.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BuyComponent } from './dashboard/buy/buy.component';
import { JourneyComponent } from './dashboard/journey/journey.component';
import { DialogContentExampleDialog, ManageComponent } from './dashboard/manage/manage.component';
import { ProductDetailsComponent } from './dashboard/product-details/product-details.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { Profile2Component } from './dashboard/profile/profile.component';
import { ProductCardComponent } from './dashboard/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UserDashboardComponent,
    LightInfoComponent,
    MyTransactionsComponent,
    MyContactListComponent,
    NewTransactionComponent,
    NewContactComponent,
    ProfileComponent,
    ManageUsersComponent,
    MainPageComponent,
    MainAdminPageComponent,
    AdminDashboardComponent,
    ConfirmRegisterComponent,
    AccessDeinedComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    BuyComponent,
    JourneyComponent,
    ManageComponent,
    ProductDetailsComponent,
    SideBarComponent,
    DialogContentExampleDialog,
    Profile2Component,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    DatepickerModule,
    BrowserAnimationsModule,    
    MaterialExampleModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    HttpClient,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
