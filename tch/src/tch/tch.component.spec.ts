import { TestBed } from '@angular/core/testing';
import { TchComponent } from './tch.component';

describe('TchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TchComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'tch' title`, () => {
    const fixture = TestBed.createComponent(TchComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tch');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, tch');
  });
});
