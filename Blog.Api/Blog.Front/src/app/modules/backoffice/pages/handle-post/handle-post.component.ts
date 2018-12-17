import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@ddj-services';
import { MarkdownComponent } from 'ngx-markdown';
import { debounceTime } from 'rxjs/operators';
import { extractNumberParam } from 'src/utilities/router.utilities';

@Component({
  selector: 'ddj-handle-post',
  templateUrl: './handle-post.component.html',
  styleUrls: ['./handle-post.component.scss']
})
export class HandlePostComponent implements OnInit {
  formGroup: FormGroup;
  markdownContent: string;
  currentPostId: number;
  @ViewChild(MarkdownComponent) markdownComp: MarkdownComponent;

  constructor(private fb: FormBuilder, private blogService: BlogService, private route: ActivatedRoute) {
    const markdownCtrl = this.fb.control(null, Validators.required);
    this.formGroup = this.fb.group({
      markdown: markdownCtrl,
      title: this.fb.control('', Validators.required),
      url: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      publicationDate: this.fb.control(new Date().toISOString(), Validators.required)
    });

    markdownCtrl.valueChanges.pipe(debounceTime(100)).subscribe(val => {
      this.markdownContent = val;
    });

    this.route.params.subscribe(params => {
      const id = extractNumberParam(params, 'id');
      if (id !== null) {
        this.currentPostId = id;
        this.patchFromId(id);
      } else {
        this.currentPostId = null;
        this.formGroup.reset({});
      }
    });
  }

  ngOnInit() {}

  patchFromId(id: number) {
    this.blogService.getEditPost(id).subscribe(upsertPost => {
      this.formGroup.patchValue(upsertPost);
    });
  }

  submitForm() {
    if (this.formGroup.invalid) {
      this.formGroup.markAsDirty();
      return;
    }

    if (this.currentPostId == null) {
      this.blogService
        .addPost({ ...this.formGroup.value, html: this.markdownComp.element.nativeElement.innerHTML })
        .subscribe(res => {
          alert('created');
        });
    } else {
      this.blogService
        .updatePost(this.currentPostId, {
          ...this.formGroup.value,
          html: this.markdownComp.element.nativeElement.innerHTML
        })
        .subscribe(res => {
          alert('updated');
        });
    }
  }
}
