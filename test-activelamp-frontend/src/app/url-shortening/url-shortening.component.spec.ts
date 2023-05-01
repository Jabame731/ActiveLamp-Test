import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShorteningComponent } from './url-shortening.component';

describe('UrlShorteningComponent', () => {
  let component: UrlShorteningComponent;
  let fixture: ComponentFixture<UrlShorteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlShorteningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlShorteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
