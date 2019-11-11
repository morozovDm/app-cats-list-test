import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@services/api.service';
import { DisableControlDirective } from '@directives/disable-control.directive';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    DisableControlDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService
  ],
  exports: [
    DisableControlDirective,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
