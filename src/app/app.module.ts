import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { JobListComponent } from './job-list/job-list.component';
import { JobComponent } from './job/job.component';
import { EditJobComponent } from './edit-job/edit-job.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    JobListComponent,
    JobComponent,
    EditJobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
