import { Injectable } from "@angular/core";
import { Cat } from "@app/app.interfaces";
import { HttpClient } from "@angular/common/http";
import { share } from "rxjs/operators";

@Injectable()
export class ApiService {
  constructor(private httpService: HttpClient) {}

  public getCatsList() {
    return this.httpService.get<Cat>("./assets/cats.json").pipe(share());
  }

  public updateCatInfo(params: Cat) {
    return this.httpService
      .put<any>(`./assets/cats.json/${params._id}`, params)
      .pipe(share());
  }

  public createCat(params: Cat) {
    return this.httpService.post("./assets/cats.json", params).pipe(share());
  }

  public deleteCatInfo(_id: number) {
    return this.httpService
      .delete<any>(`./assets/cats.json/${_id}`)
      .pipe(share());
  }
}
