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
import { AppendicesComponent } from './appendices/appendices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SynthesisComponent } from './synthesis/synthesis.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ToolbarComponent,
    ChipsComponent,
    DetailComponent,
    CertificationsComponent,
    FooterComponent,
    PracticumOverviewComponent,
    AppendicesComponent,
    SynthesisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
