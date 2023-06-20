import {InjectionToken} from '@angular/core';

export const CONFIG_TOKEN = new InjectionToken<Config>('config');

    export interface Config {
      baseUrl: string;
    }

