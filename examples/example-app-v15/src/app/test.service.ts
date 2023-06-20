import { Inject, Injectable } from '@angular/core';
import { Config, CONFIG_TOKEN } from './config';

@Injectable({ providedIn: 'root' })
export class TestService {
  constructor(
    @Inject(CONFIG_TOKEN) public config: Config,
  ) {}
}
