import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTesteComponent } from './cadastroTeste.component';

describe('CadastroTesteComponent', () => {
  let component: CadastroTesteComponent;
  let fixture: ComponentFixture<CadastroTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTesteComponent]
    });
    fixture = TestBed.createComponent(CadastroTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
