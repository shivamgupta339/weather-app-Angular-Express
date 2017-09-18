import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFavoritesComponent } from './update-favorites.component';

describe('UpdateFavoritesComponent', () => {
  let component: UpdateFavoritesComponent;
  let fixture: ComponentFixture<UpdateFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
