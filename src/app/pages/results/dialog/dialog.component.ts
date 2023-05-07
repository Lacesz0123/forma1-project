import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Result } from '../models/result.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public formBuilder: FormBuilder,
    private fireService: FirestoreService,
    @Inject(MAT_DIALOG_DATA) public data: Result
  ) {
    this.formGroup = this.formBuilder.group({
      team_name: new FormControl(''),
      team_points: new FormControl(''),
      team_image: new FormControl('')
    });
    if (this.data) {
      this.patchForm();
    }
  }

  patchForm() {
    this.formGroup.patchValue({
      team_name: this.data.teamName,
      team_points: this.data.teamPoints,
      team_image: this.data.teamImage
    })
  }

  onSave() {
    const result: Result = {
      teamName: this.formGroup.get('team_name')?.value,
      teamPoints: parseInt(this.formGroup.get('team_points')?.value),
      teamImage: this.formGroup.get('team_image')?.value,
      id: !!this.data?.id ? this.data.id : '' 
    }
    if (this.data) {
      this.fireService.updateResult(result);
    } else {
      this.fireService.addNewResult(result);
    }
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
