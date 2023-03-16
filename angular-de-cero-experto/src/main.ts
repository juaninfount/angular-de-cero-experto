import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '../src/01-tipos-basicos'
import '../src/05-desestructuracion-basica'


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


















