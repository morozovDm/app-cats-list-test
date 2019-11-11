import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from './shared/shared.module';
import {
  CatsListComponent,
  CatsListItemComponent,
  CatCardComponent
} from "@components/index";

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatCardComponent,
    CatsListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
