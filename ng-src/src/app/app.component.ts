import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public isModalOpen: boolean = false;
  public isPanelOpen: boolean = false;

  @HostListener('dismiss', ['$event.target'])
  onModalDismiss() {
    this.isModalOpen = false;
    this.isPanelOpen = false;
  }

	openModal() {
		this.isModalOpen = true;
	}

  openPanel() {
    this.isPanelOpen = true;
  }
}
