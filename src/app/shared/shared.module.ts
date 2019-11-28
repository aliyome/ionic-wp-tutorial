import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WpHeadComponent } from './wp-head/wp-head.component';

@NgModule({
  declarations: [WpHeadComponent],
  exports: [WpHeadComponent],
  imports: [CommonModule, IonicModule],
})
export class SharedModule {}
