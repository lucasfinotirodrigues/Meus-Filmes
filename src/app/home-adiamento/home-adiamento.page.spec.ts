import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAdiamentoPage } from './home-adiamento.page';

describe('HomeAdiamentoPage', () => {
  let component: HomeAdiamentoPage;
  let fixture: ComponentFixture<HomeAdiamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeAdiamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
