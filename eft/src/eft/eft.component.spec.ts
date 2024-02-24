import { TestBed } from '@angular/core/testing';
import { EftComponent } from './eft.component';

describe('EftComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EftComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EftComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'eft' title`, () => {
    const fixture = TestBed.createComponent(EftComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('eft');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EftComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, eft');
  });
});
