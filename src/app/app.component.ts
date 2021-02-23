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
  a = 1;
  b = 1;
  counter1 = 0;
  counter2 = 0;

  arr_name: string[][] = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  EventKlik() {
    if (this.a >= 1 && this.a <= 5 && this.b >= 1 && this.b <= 5) {
      if (this.arr_name[this.a - 1][this.b - 1] != "*") {
        alert("sudah terisi");
      } else {
        if (this.count % 2 == 0) {
          this.arr_name[this.a - 1][this.b - 1] = "0";
          this.user = "user 2";
        } else {
          this.arr_name[this.a - 1][this.b - 1] = "1";
          this.user = "user 1";
        }
        this.count = this.count + 1;
      }
    } else {
      alert("masukkan data dari 1-5");
    }

    //win condition
    if (
      this.arr_name[0][0] == "0" &&
      this.arr_name[0][1] == "0" &&
      this.arr_name[0][2] == "0" &&
      this.arr_name[0][3] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[0][1] == "0" &&
      this.arr_name[0][2] == "0" &&
      this.arr_name[0][3] == "0" &&
      this.arr_name[0][4] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[1][0] == "0" &&
      this.arr_name[1][1] == "0" &&
      this.arr_name[1][2] == "0" &&
      this.arr_name[1][3] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[1][1] == "0" &&
      this.arr_name[1][2] == "0" &&
      this.arr_name[1][3] == "0" &&
      this.arr_name[1][4] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[2][0] == "0" &&
      this.arr_name[2][1] == "0" &&
      this.arr_name[2][2] == "0" &&
      this.arr_name[2][3] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[2][1] == "0" &&
      this.arr_name[2][2] == "0" &&
      this.arr_name[2][3] == "0" &&
      this.arr_name[2][4] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[3][0] == "0" &&
      this.arr_name[3][1] == "0" &&
      this.arr_name[3][2] == "0" &&
      this.arr_name[3][3] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[3][1] == "0" &&
      this.arr_name[3][2] == "0" &&
      this.arr_name[3][3] == "0" &&
      this.arr_name[3][4] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[4][0] == "0" &&
      this.arr_name[4][1] == "0" &&
      this.arr_name[4][2] == "0" &&
      this.arr_name[4][3] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[4][1] == "0" &&
      this.arr_name[4][2] == "0" &&
      this.arr_name[4][3] == "0" &&
      this.arr_name[4][4] == "0"
    ) {
      alert("Player 1 win!");
    }
    if (
      this.arr_name[0][0] == "0" &&
      this.arr_name[1][0] == "0" &&
      this.arr_name[2][0] == "0" &&
      this.arr_name[3][0] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[1][0] == "0" &&
      this.arr_name[2][0] == "0" &&
      this.arr_name[3][0] == "0" &&
      this.arr_name[4][0] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[0][1] == "0" &&
      this.arr_name[1][1] == "0" &&
      this.arr_name[2][1] == "0" &&
      this.arr_name[3][1] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[1][1] == "0" &&
      this.arr_name[2][1] == "0" &&
      this.arr_name[3][1] == "0" &&
      this.arr_name[4][1] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[0][2] == "0" &&
      this.arr_name[1][2] == "0" &&
      this.arr_name[2][2] == "0" &&
      this.arr_name[3][2] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[1][2] == "0" &&
      this.arr_name[2][2] == "0" &&
      this.arr_name[3][2] == "0" &&
      this.arr_name[4][2] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[0][3] == "0" &&
      this.arr_name[1][3] == "0" &&
      this.arr_name[2][3] == "0" &&
      this.arr_name[3][3] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[1][3] == "0" &&
      this.arr_name[2][3] == "0" &&
      this.arr_name[3][3] == "0" &&
      this.arr_name[4][3] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[0][4] == "0" &&
      this.arr_name[1][4] == "0" &&
      this.arr_name[2][4] == "0" &&
      this.arr_name[3][4] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[1][4] == "0" &&
      this.arr_name[2][4] == "0" &&
      this.arr_name[3][4] == "0" &&
      this.arr_name[4][4] == "0"
    ) {
      alert("Player 1 win!");
    } else if (
      this.arr_name[0][0] == "1" &&
      this.arr_name[0][1] == "1" &&
      this.arr_name[0][2] == "1" &&
      this.arr_name[0][3] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[0][1] == "1" &&
      this.arr_name[0][2] == "1" &&
      this.arr_name[0][3] == "1" &&
      this.arr_name[0][4] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[1][0] == "1" &&
      this.arr_name[1][1] == "1" &&
      this.arr_name[1][2] == "1" &&
      this.arr_name[1][3] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[1][1] == "1" &&
      this.arr_name[1][2] == "1" &&
      this.arr_name[1][3] == "1" &&
      this.arr_name[1][4] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[2][0] == "1" &&
      this.arr_name[2][1] == "1" &&
      this.arr_name[2][2] == "1" &&
      this.arr_name[2][3] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[2][1] == "1" &&
      this.arr_name[2][2] == "1" &&
      this.arr_name[2][3] == "1" &&
      this.arr_name[2][4] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[3][0] == "1" &&
      this.arr_name[3][1] == "1" &&
      this.arr_name[3][2] == "1" &&
      this.arr_name[3][3] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[3][1] == "1" &&
      this.arr_name[3][2] == "1" &&
      this.arr_name[3][3] == "1" &&
      this.arr_name[3][4] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[4][0] == "1" &&
      this.arr_name[4][1] == "1" &&
      this.arr_name[4][2] == "1" &&
      this.arr_name[4][3] == "1"
    ) {
      alert("Player 2 win!");
    } else if (
      this.arr_name[4][1] == "1" &&
      this.arr_name[4][2] == "1" &&
      this.arr_name[4][3] == "1" &&
      this.arr_name[4][4] == "1"
    ) {
      alert("Player 2 win!");
    }

    //   for (let i = 0; i < 5; i++) {
    //     for (let j = 0; j < 5; j++) {
    //       if (this.arr_name[i][j] == "0") {
    //         this.counter1 = this.counter1 + 1;
    //         if(this.arr_name[i][4] == "1" || this.arr_name[i][0]=="1"){

    //         }
    //       }
    //     }
    //     this.counter1 = 0;
    //     this.counter2 = 0;
    //   }
  }
}
