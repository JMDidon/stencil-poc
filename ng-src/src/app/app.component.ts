import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private isModalOpen: boolean = false;
  private isComplexModalOpen: boolean = false;
  private isPanelOpen: boolean = false;
  private contents = {
    title: 'A "complex" modal in Angular',
    content: 'With nice content',
    footer: 'Close me plz',
  };

  @HostListener('dismiss', ['$event.target'])
  onModalDismiss() {
    this.isModalOpen = false;
    this.isComplexModalOpen = false;
    this.isPanelOpen = false;
  }

	openModal() {
		this.isModalOpen = true;
	}

  openComplexModal() {
    this.isComplexModalOpen = true;
  }

  openPanel() {
    this.isPanelOpen = true;
  }
}
