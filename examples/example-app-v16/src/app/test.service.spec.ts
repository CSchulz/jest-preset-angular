import { TestBed } from '@angular/core/testing';

import { CONFIG_TOKEN } from './config';
import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TestService,
        {
          provide: CONFIG_TOKEN,
          useValue: {},
        },
      ],
    });
  });

  it('should have correct model value set', () => {
    TestBed.inject(TestService);
  });
});
