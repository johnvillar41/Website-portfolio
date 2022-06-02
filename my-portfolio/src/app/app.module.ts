import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ChipsComponent } from './chips/chips.component';
import { DetailComponent } from './detail/detail.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { FooterComponent } from './footer/footer.component';
import { PracticumOverviewComponent } from './practicum-overview/practicum-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ToolbarComponent,
    ChipsComponent,
    DetailComponent,
    CertificationsComponent,
    FooterComponent,
    PracticumOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
