import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncContentComponent } from './components/async-content/async-content.component';

const exportedComponents = [AsyncContentComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...exportedComponents],
  exports: [...exportedComponents]
})
export class SharedModule {}
