import { enableProdMode } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { VotingsNewComponent } from './app/votings-new/votings-new.component';
import { createCustomElement } from '@angular/elements';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

createApplication({ providers: [] }).then((appRef) => {
  // create a constructor of a custom element
  const votingNew = createCustomElement(
         VotingsNewComponent, 
       { injector: appRef.injector}
  );   
  customElements.define('voting-new', votingNew);    
});


