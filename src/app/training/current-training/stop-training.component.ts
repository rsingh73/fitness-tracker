import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

export interface DialogData {
  progress: number;
}

@Component({
  selector: 'app-stop-training',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  template: ` <h2 mat-dialog-title>Are you sure?</h2>
    <mat-dialog-content>
      <p>You already got {{ data.progress }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>`,
})
export class StopTrainingComponent {
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
}
