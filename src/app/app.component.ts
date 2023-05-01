import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dataSet1 = [
    ["Chloe", 10000],
    ["Killua", 12000],
    ["Peter", 13000],
    ["Johann", 10000],
    ["Dio", 9000]
  ];
  dataSet2 = [
    ["Maya", 15000],
    ["Chris", 20000],
    ["Manny", 5000],
    ["Jenny", 9000],
    ["Koko", 17000]
  ];
}
