import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BugFormComponent } from './bugform/bugform.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { SearchBugComponent } from './search-bug/search-bug.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BugFormComponent,
    CreateBugComponent,
    SearchBugComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
