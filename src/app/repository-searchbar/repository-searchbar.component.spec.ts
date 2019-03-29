import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorySearchbarComponent } from './repository-searchbar.component';

describe('RepositorySearchbarComponent', () => {
  let component: RepositorySearchbarComponent;
  let fixture: ComponentFixture<RepositorySearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorySearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorySearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
