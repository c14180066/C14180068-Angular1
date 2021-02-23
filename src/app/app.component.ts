import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  count = 0;
  user = "user 1";
  a = 0;
  b = 0;

  arr_name: string[][] = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  EventKlik() {
    if (this.count % 2 == 0) {
      this.user = "user 2";
    } else {
      this.user = "user 1";
    }
    this.count = this.count + 1;
  }
}
