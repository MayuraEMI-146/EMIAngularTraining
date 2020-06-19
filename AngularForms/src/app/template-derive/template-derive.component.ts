import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-template-derive",
  templateUrl: "./template-derive.component.html",
  styleUrls: ["./template-derive.component.css"],
})
export class TemplateDeriveComponent implements OnInit {
  model = new User();
  constructor() {}
  Skill: string[] = ["Angular", "Csharp", "PHP", "ROR", "SQL Server"];
  ngOnInit() {}
  onSubmit(form) {
    console.table(form.value);
    alert("Register");
  }
}
