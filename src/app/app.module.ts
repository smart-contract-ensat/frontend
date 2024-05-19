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
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
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
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddMPComponent } from './MP/add-mp/add-mp.component';
import { ListMPComponent } from './MP/list-mp/list-mp.component';
import { DetailMPComponent } from './MP/detail-mp/detail-mp.component';
import { UpdateMPComponent } from './MP/update-mp/update-mp.component';
import { TableComponent } from './shared/table/table.component';
import { ListPublicProductComponent } from './shared/list-public-product/list-public-product.component';
import { TableMPComponent } from './shared/table-mp/table-mp.component';
import { PresentationComponent } from './shared/presentation/presentation.component';
import { CommandeClientComponent } from './commande/commande-client/commande-client.component';
import { CommandeProductsProducteurComponent } from './commande/commande-products-producteur/commande-products-producteur.component';
import { CommandeMpProducteurComponent } from './commande/commande-mp-producteur/commande-mp-producteur.component';
import { CommandeMpFourniseurComponent } from './commande/commande-mp-fourniseur/commande-mp-fourniseur.component';

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
    ProductCardComponent,
    AddProductComponent,
    ListProductComponent,
    DetailProductComponent,
    UpdateProductComponent,
    AddMPComponent,
    ListMPComponent,
    DetailMPComponent,
    UpdateMPComponent,
    TableComponent,
    ListPublicProductComponent,
    TableMPComponent,
    PresentationComponent,
    CommandeClientComponent,
    CommandeProductsProducteurComponent,
    CommandeMpProducteurComponent,
    CommandeMpFourniseurComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    DatepickerModule,
    BrowserAnimationsModule,    
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    ,
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
