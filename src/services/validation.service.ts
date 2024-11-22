class Validation {
  readonly name = /^\p{Letter}(?:(?:[\s-]?\p{Letter}){1,}[\s-]{0,1})$/u;
  readonly email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
  readonly housenumber = 0;
  readonly default = 3;
  readonly password = 4;
  readonly phone = /^\+?\d{10,}$/; //не використовується, бо не передається код країни

  validation(value: string, key: string | boolean) {
    switch (key) {
      case 'name':
        return this.name.test(value) ? 'Success' : 'Error';
      case 'email':
        return this.email.test(value) ? 'Success' : 'Error';
      case 'phone':
        return this.phone.test(value) ? 'Success' : 'Error';
      case /password/.test('password'):
        return value.length >= this.password ? 'Success' : 'Error';
      default:
        return value.length > this.default ? 'Success' : 'Error';
    }
  }
}

export const validateService = new Validation();
