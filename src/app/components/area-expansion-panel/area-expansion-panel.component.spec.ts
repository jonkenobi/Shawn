import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaExpansionPanelComponent } from './area-expansion-panel.component';

describe('AreaExpansionPanelComponent', () => {
  let component: AreaExpansionPanelComponent;
  let fixture: ComponentFixture<AreaExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
