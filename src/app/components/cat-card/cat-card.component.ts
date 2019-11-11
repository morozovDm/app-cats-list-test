import { Component, Input, OnChanges } from "@angular/core";
import { Cat } from "../../app.interfaces";
import { FormGroup, FormControl } from "@angular/forms";
import { ApiService } from "../../shared/services/api.service";

@Component({
  selector: "cat-card",
  templateUrl: "./cat-card.component.html",
  styleUrls: ["./cat-card.component.scss"]
})
export class CatCardComponent implements OnChanges {
  @Input() public selectedCatInfo: Cat;

  public isDisabledEdit = true;

  public catEditForm = new FormGroup({
    _id: new FormControl(""),
    name: new FormControl(""),
    img: new FormControl(""),
    like: new FormControl(""),
    description: new FormControl("")
  });

  constructor(private apiService: ApiService) {}

  ngOnChanges() {
    this.catEditForm.setValue({
      _id: this.selectedCatInfo._id ? this.selectedCatInfo._id : null,
      name: this.selectedCatInfo.name ? this.selectedCatInfo.name : null,
      img: this.selectedCatInfo.img ? this.selectedCatInfo.img : null,
      like: this.selectedCatInfo.like ? this.selectedCatInfo.like : null,
      description: this.selectedCatInfo.description
        ? this.selectedCatInfo.description
        : null
    });
  }

  public edit() {
    this.isDisabledEdit = false;
  }

  public delete() {
    this.apiService.deleteCatInfo(this.catEditForm.get("_id").value);
  }

  public accept() {
    this.apiService.updateCatInfo(this.catEditForm.getRawValue());
  }

  public cancel() {
    this.isDisabledEdit = true;
  }
}
