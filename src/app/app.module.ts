import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BugFormComponent } from './bugform/bugform.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { SearchBugComponent } from './search-bug/search-bug.component';
import {RouterModule,Routes} from '@angular/router';
import { UpdateBugComponent } from './update-bug/update-bug.component'
const appRoutes:Routes = [
  {path : '',component:BugFormComponent},
  {path : 'create',component:CreateBugComponent},
  {path : 'search',component:SearchBugComponent},
  {path : 'update',component:UpdateBugComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BugFormComponent,
    CreateBugComponent,
    SearchBugComponent,
    UpdateBugComponent,
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true}
  ),
    BrowserModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
