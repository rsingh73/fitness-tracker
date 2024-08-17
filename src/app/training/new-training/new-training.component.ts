import { Component, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-new-training',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.scss',
})
export class NewTrainingComponent {
  trainingStart = output<void>();
  exercises = [
    {
      text: 'Crunches',
      value: 'crunches',
    },
    {
      text: 'Touch Toes',
      value: 'touch-toes',
    },
    {
      text: 'Side Lunges',
      value: 'side-lunges',
    },
    {
      text: 'Burpees',
      value: 'burpees',
    },
  ];

  onStartTraining() {
    this.trainingStart.emit();
  }
}
