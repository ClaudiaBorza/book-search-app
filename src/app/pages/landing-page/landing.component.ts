import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WhiteSpaceValidator } from '../../shared/directive/white-space-validator.directive';
import { LoadingSpinnerService } from '../../shared/components/loading-spinner/loading-spinner.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'bs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  username = new FormControl(null);
  isWeb = false;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _breakpointObserver: BreakpointObserver,
              private _loadingSpinner: LoadingSpinnerService) {
    this._breakpointObserver
      .observe([Breakpoints.Web])
      .subscribe((result) => this.isWeb = result.matches);

    this.username
      .addValidators([Validators.required, WhiteSpaceValidator.noWhiteSpace]);
  }

  navigateToBooksPage() {
    this._loadingSpinner.show();
    sessionStorage.setItem('userName', this.username.value);

    setTimeout(() => {
      this._loadingSpinner.hide();
      this._router.navigate(['/overview']);
    }, 2000);
  }
}
