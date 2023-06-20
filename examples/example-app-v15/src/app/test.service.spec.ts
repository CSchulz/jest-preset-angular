import { TestBed } from "@angular/core/testing";
import { TestService } from "./test.service";

describe('TestService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TestService
      ],
    });
  });

  it('should have correct model value set', () => {
    TestBed.inject(TestService);
  });
});
