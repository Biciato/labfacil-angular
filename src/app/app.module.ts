import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentTabComponent } from './content-tab/content-tab.component';
import { ContentTabsetComponent } from './content-tabset/content-tabset.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { PCComponent } from './pc/pc.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { HorariosComponent } from './horarios/horarios.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  // basic routes
  {  path: '', redirectTo: 'login', pathMatch: 'full' },
  {  path: 'dashboard', component: DashboardComponent },
  {  path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
    ContentTabComponent,
    ContentTabsetComponent,
    UnidadesComponent,
    PCComponent,
    FaturamentoComponent,
    UsuariosComponent,
    DocumentosComponent,
    HorariosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
