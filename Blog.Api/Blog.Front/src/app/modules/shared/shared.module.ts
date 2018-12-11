import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncContentComponent } from './components/async-content/async-content.component';
import { materialModules } from './material-imports';

const exportedComponents = [AsyncContentComponent];

@NgModule({
  imports: [CommonModule, ...materialModules],
  declarations: [...exportedComponents],
  exports: [...exportedComponents, ...materialModules]
})
export class SharedModule {}
