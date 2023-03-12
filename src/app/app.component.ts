import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'acessibilidade';
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: null,
        disabled: false
      }]
    })
  }

  public submit(): void {
    this.form.get('yesNoAnswer')?.disable()
    console.log(this.form.value)
  }
}
