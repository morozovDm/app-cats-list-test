import { Component, Output, EventEmitter } from "@angular/core";
import { ApiService } from "@services/api.service";
import { Cat } from "@app/app.interfaces";

@Component({
  selector: "cats-list",
  templateUrl: "./cats-list.component.html",
  styleUrls: ["./cats-list.component.scss"]
})
export class CatsListComponent {
  @Output() public selectedCat = new EventEmitter<Cat>();

  public model$ = this.apiService.getCatsList();

  constructor(private apiService: ApiService) {}

  public onSelectedCat(value: Cat) {
    this.selectedCat.emit(value);
  }
}
