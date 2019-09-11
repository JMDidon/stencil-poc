import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MButton } from './m-button/m-button';
import { MComplexModal } from './m-complex-modal/m-complex-modal';
import { MModal } from './m-modal/m-modal';
import { MPanel } from './m-panel/m-panel';

@NgModule({
  declarations: [
    MButton,
    MComplexModal,
    MModal,
    MPanel,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    MButton,
    MComplexModal,
    MModal,
    MPanel,
  ],
})
export class AngularElementsModule {
  constructor(private injector: Injector) {
    const MButtonElement = createCustomElement(MButton, { injector });
    const MComplexModalElement = createCustomElement(MComplexModal, { injector });
    const MModalElement = createCustomElement(MModal, { injector });
    const MPanelElement = createCustomElement(MPanel, { injector });

    window.customElements.define('m-button', MButtonElement);
    window.customElements.define('m-complex-modal', MComplexModalElement);
    window.customElements.define('m-modal', MModalElement);
    window.customElements.define('m-panel', MPanelElement);
  }

  ngDoBootstrap() {}
}
