import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-findandreplace',
  templateUrl: './findandreplace.component.html',
  styleUrls: ['./findandreplace.component.css']
})
export class FindandreplaceComponent implements OnInit {

  findReplaceForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadFindReplaceForm();
  }

  loadFindReplaceForm () {
    this.findReplaceForm = this.formbuilder.group({
      searchTextArea: ["", Validators.required],
      replaceTextArea: [""],
      searchText: [""],
      replaceText: [""]
    })
  }

}
