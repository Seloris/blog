import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor(private snackBar: MatSnackBar) {}

  showInfo(message: string) {
    this.snackBar.open(message, null, {
      duration: 1000
    });
  }

  showError(error: string) {
    this.snackBar.open(error, null, {
      duration: 1000
    });
  }
}
