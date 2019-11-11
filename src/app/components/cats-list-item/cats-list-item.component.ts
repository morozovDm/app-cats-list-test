import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Cat } from "@app/app.interfaces";

@Component({
  selector: "cats-list-item",
  templateUrl: "./cats-list-item.component.html",
  styleUrls: ["./cats-list-item.component.scss"]
})
export class CatsListItemComponent {
  @Input() public catInfo: Cat;
  @Output() public selectedCat = new EventEmitter<Cat>();

  constructor() {}

  public selectCat(): void {
    this.selectedCat.emit(this.catInfo);
  }
}
