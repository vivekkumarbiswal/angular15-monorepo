import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskEmail',
})
export class EmailMaskPipe implements PipeTransform {
  transform(email: string | null | undefined): string {
    if (!email) return '';

    const [name, domain] = email.split('@');

    if (name.length === 1) return email;
    if (name.length === 2) return name[0] + '*@' + domain;

    return (
      name[0] +
      '*'.repeat(name.length - 2) +
      name[name.length - 1] +
      '@' +
      domain
    );
  }
}
