import { Component, inject, OnInit, output, signal } from '@angular/core';
import {
  ProgressSpinnerMode,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.scss',
})
export class CurrentTrainingComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  progress = signal<number>(0);
  timer!: ReturnType<typeof setInterval>;
  readonly dialog = inject(MatDialog);
  trainingExit = output<void>();

  constructor() {}

  ngOnInit(): void {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress.update((currentValue) => currentValue + 5);
      if (this.progress() >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    if (this.timer) {
      clearInterval(this.timer);
      const dialogRef = this.dialog.open(StopTrainingComponent, {
        data: {
          progress: this.progress(),
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (result) {
          this.trainingExit.emit();
        } else {
          this.startOrResumeTimer();
        }
      });
    }
  }
}
