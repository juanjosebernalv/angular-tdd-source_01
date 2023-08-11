import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Layout', () => {
    it('Has Sign Up Header', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const h1 = signup.querySelector('h1');
      expect(h1?.textContent).toBe('Sign Up');
    });

    it('Has Username Input', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const label = signup.querySelector('label[for="username"]');
      // const input = signup.querySelector('input[placeholder="Username"]');
      const input = signup.querySelector('input[id="username"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Username');
    });
    it('Has Email Input', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const label = signup.querySelector('label[for="email"]');
      const input = signup.querySelector('input[id="email"]');
      // const input = signup.querySelectorAll('input[placeholder=Email]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Email');
    });
    it('Has Password Input', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const label = signup.querySelector('label[for="password"]');
      const input = signup.querySelector('input[id="password"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Password');
    });
    it('Has Password type for password Input', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const input = signup.querySelector('input[id="password"]') as HTMLInputElement;
      expect(input.type).toBe('password');
    });
    it('Has Password Repeat Input', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const label = signup.querySelector('label[for="passwordRepeat"]');
      const input = signup.querySelector('input[id="passwordRepeat"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Password Repeat');
    });
    it('Has Password type for password Repeat Input', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const input = signup.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;
      expect(input.type).toBe('password');
    });

    it('Has Sign Up Button', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const button = signup.querySelector('button');
      expect(button?.textContent).toBe('Sign Up');
    });
    it('Disables the Button initially', () => {
      const signup = fixture.nativeElement as HTMLElement;
      const button = signup.querySelector('button');
      expect(button?.disabled).toBeFalsy();
    });


  });

  describe('Interactions', () => {
    it('Enables button when the password and password repeat fields activate button', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      // const passwordInput = signup.querySelector('input[id="password"]') as HTMLInputElement;
      // const passwordRepeatInput = signup.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;
      const passwordInput = signUp.querySelector('input[id="password"]') as HTMLInputElement;
      const passwordRepeatInput = signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;

      passwordInput.value = "P4ssword";
      passwordInput.dispatchEvent(new Event('input'));
      passwordRepeatInput.value = "P4ssword";
      passwordRepeatInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      const button = signUp.querySelector('button');
      expect(button?.disabled).toBeFalsy();

    });
  });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
