import { render, screen } from "@testing-library/angular";
import { SignUpComponent } from './sign-up.component';
import userEvent from '@testing-library/user-event';

describe('SignUpComponent', () => {
  describe('Layout', () => {
    it('Has Sign Up header', async () => {
      await render(SignUpComponent);
      const header = screen.getByRole('heading', {name: 'Sign Up'});
      expect(header).toBeInTheDocument();
    });

    it('Has Username Input', async() => {
      await render(SignUpComponent);
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('Has Email Input', async() => {
      await render(SignUpComponent);
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('Has Password Input', async() => {
      await render(SignUpComponent);
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });

    it('Has password type for Password Input', async() => {
      await render(SignUpComponent);
      const input = screen.getByLabelText('Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('Has Password Repeat Input', async() => {
      await render(SignUpComponent);
      expect(screen.getByLabelText('Password Repeat')).toBeInTheDocument();
    });

    it('Has password type for Password Repeat Input', async() => {
      await render(SignUpComponent);
      const input = screen.getByLabelText('Password Repeat');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('Has Sign Up Button', async () => {
      await render(SignUpComponent);
      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeInTheDocument();
    });

    it('Disables the Button initially', async() => {
      await render(SignUpComponent);
      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('Enables the button when the password and password repeat fields have the same value', async () => {
      await render(SignUpComponent);

      const password = screen.getByLabelText('Password');
      const passwordRepeat = screen.getByLabelText('Password Repeat');

      await userEvent.type(password, 'P4ssword');
      await userEvent.type(passwordRepeat, 'P4ssword');

      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeEnabled();


    });

  });
});


