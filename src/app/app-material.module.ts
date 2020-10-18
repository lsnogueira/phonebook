import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const materialModules = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatBottomSheetModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...materialModules],
  ],
  exports: [...materialModules],
})
export class AppMaterialModule { }
