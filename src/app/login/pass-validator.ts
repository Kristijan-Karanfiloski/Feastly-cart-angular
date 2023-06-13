import { FormControl } from '@angular/forms';

export function passwordValidator(
  control: FormControl
): { [key: string]: boolean } | null {
  const value = control.value;
  const hasNumber = /\d/.test(value);
  const hasLetter = /[a-zA-Z]/.test(value);

  // If the password has both a number and a letter, return null (no error)
  if (hasNumber && hasLetter) {
    return null;
  }
  // Otherwise, return an error object
  else {
    return { passwordInvalid: true };
  }
}
