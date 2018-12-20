import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@ddj-services';
import { MarkdownComponent } from 'ngx-markdown';
import { debounceTime } from 'rxjs/operators';
import { extractNumberParam } from 'src/utilities/router.utilities';

// tslint:disable:max-line-length
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

  test() {
    this.formGroup.patchValue({
      title: 'Comment devenir expert Angluar en 3 step',
      publicationDate: new Date().toISOString(),
      url: 'article-blog',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
      markdown: `
# Markdown Ipsum Presents

**Pellentesque habitant morbi tristique** senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. _Aenean ultricies mi vitae est_. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,  \`commodo vitae\`, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum  rutrum orci, sagittis tempus lacus enim ac dui. [Donec non enim](#) in turpis pulvinar facilisis. Ut felis.

## Header Level 2
  1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  2. Aliquam tincidunt mauris eu risus.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur  massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.

### Header Level 3
  * Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  * Aliquam tincidunt mauris eu risus.
\`\`\` css
#header h1 a {  display: block;  width: 300px;  height: 80px;}
\`\`\`
Une liste :
1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
2. Aliquam tincidunt mauris eu risus.
3. Vestibulum auctor dapibus neque.

Autre liste :
* Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
* Aliquam tincidunt mauris eu risus.
* Vestibulum auctor dapibus neque.

# Deuxième gros bloc`
    });
  }
}
