import { Injectable } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';


@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private overlayRef: OverlayRef | undefined;

  constructor(private overlay: Overlay) {
  }

  show() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    if (this.overlayRef.hasAttached()) {
      this.hide();
    }

    const spinnerOverlayPortal = new ComponentPortal(LoadingSpinnerComponent);
    this.overlayRef.attach(spinnerOverlayPortal);
  }

  hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
