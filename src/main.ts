import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

const isMobile = window.innerWidth <= 430 && window.innerHeight <= 932;

if (isMobile) {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
} else {
  document.body.innerHTML = `
      <div style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #111;
        color: white;
        padding: 2rem;
        font-family: sans-serif;
      ">
        <div>
          <h2>Mobile Only</h2>
          <p>This application is designed to run only on mobile screen sizes (e.g., iPhone SE).</p>
          <p>Please open this on a mobile device.</p>
        </div>
      </div>
    `;
}
