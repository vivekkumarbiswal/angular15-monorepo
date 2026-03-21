import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface Root {
  controls: Control[];
}

export interface Control {
  name: string;
  label: string;
  value: string;
  type: string;
  validators: Validators;
  options?: Options;
}

export interface Validators {
  required?: boolean;
  minLength?: number;
}

export interface Options {
  min: string;
  max: string;
  step: string;
  icon: string;
}

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent {
  @Input() jsonFormData: any;
}
