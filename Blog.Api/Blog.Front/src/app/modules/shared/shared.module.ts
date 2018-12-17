import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncContentComponent } from './components/async-content/async-content.component';
import { sharedMaterialModules } from './material-imports';

const exportedComponents = [AsyncContentComponent];

@NgModule({
  imports: [CommonModule, ...sharedMaterialModules],
  declarations: [...exportedComponents],
  exports: [...exportedComponents, ...sharedMaterialModules]
})
export class SharedModule {}
