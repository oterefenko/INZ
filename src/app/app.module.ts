import {MainPageComponent} from './components/main-page/main-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {LoaderService} from './services/loader.service';
import {GraphPageComponent} from './components/graph-page/graph-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'graph', component: GraphPageComponent}
  // { path: 'search', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GraphPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
