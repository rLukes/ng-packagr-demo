import { Component, OnInit } from "@angular/core";

@Component({
  selector: "super-lib-component",
  template: "<p>Hello from the library</p>"
})
export class SuperLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
