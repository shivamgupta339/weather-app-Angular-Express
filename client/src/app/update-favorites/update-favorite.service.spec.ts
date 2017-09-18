import { TestBed, inject } from '@angular/core/testing';

import { UpdateFavoriteService } from './update-favorite.service';

describe('UpdateFavoriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateFavoriteService]
    });
  });

  it('should be created', inject([UpdateFavoriteService], (service: UpdateFavoriteService) => {
    expect(service).toBeTruthy();
  }));
});
