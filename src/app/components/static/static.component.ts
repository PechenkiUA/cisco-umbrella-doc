import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {CheckComponent} from '../check/check.component';

@Component({
  selector: 'app-static',
  imports: [
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CheckComponent,
  ],
  templateUrl: './static.component.html',
  styleUrl: './static.component.css'
})
export class StaticComponent {
  isLinear: boolean = false;
}
