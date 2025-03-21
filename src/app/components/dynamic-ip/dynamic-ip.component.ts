import { Component } from '@angular/core';
import {
  MatStep,
  MatStepContent,
  MatStepLabel,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious
} from '@angular/material/stepper';
import {MatButton} from '@angular/material/button';
import {CheckComponent} from '../check/check.component';

@Component({
  selector: 'app-dynamic-ip',
  imports: [
    MatStepper,
    MatButton,
    MatStep,
    MatStepContent,
    MatStepLabel,
    MatStepperNext,
    CheckComponent,
    MatStepperPrevious
  ],
  templateUrl: './dynamic-ip.component.html',
  styleUrl: './dynamic-ip.component.css'
})
export class DynamicIpComponent {

}
