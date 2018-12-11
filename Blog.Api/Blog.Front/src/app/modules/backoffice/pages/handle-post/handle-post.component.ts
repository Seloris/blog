import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ddj-handle-post',
  templateUrl: './handle-post.component.html',
  styleUrls: ['./handle-post.component.scss']
})
export class HandlePostComponent implements OnInit {
  formGroup: FormGroup;
  markdownContent: string;

  constructor(private fb: FormBuilder) {
    const contentCtrl = this.fb.control(null, Validators.required);
    this.formGroup = this.fb.group({
      content: contentCtrl
    });

    contentCtrl.valueChanges.pipe(debounceTime(100)).subscribe(val => {
      this.markdownContent = val;
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.formGroup.invalid) {
      this.formGroup.markAsDirty();
      return;
    }
  }
}
