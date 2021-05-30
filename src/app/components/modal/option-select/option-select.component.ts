import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.scss']
})
export class OptionSelectComponent implements OnInit {

  title: string;
  options = [];
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: any,
    private readonly dialogRef: MatDialogRef<OptionSelectComponent>,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const { data } = this;
    const { options, selection, title } = data;
    const keys = Object.keys(options);
    for (const key of keys) {
      this.options.push({label: options[key], value: key})
    }
    this.title = title;
    this.form = this.fb.group({
      selection: [selection]
    });
  }

  okay() {
    this.dialogRef.close(this.form.getRawValue().selection);
  }

  cancel() {
    this.dialogRef.close();
  }

}
