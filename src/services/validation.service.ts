class Validation {
  readonly name = /^\p{Letter}(?:(?:[-\s`'"]?\p{Letter}){2,30}[\s]{0,1})$/u;
  readonly message =
    /^\p{Letter}(?:(?:[-\s`\(\)!\?,.'"\n]{0,2}\p{Letter}){2,300}[\s\n]?)$/u;
  readonly phone = /^\+?[\d-()]{16}$/;
  readonly email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

  validation(value: string, key: string | boolean) {
    switch (key) {
      case 'name':
        return this.name.test(value) ? 'Success' : 'Error';
      case 'email':
        return this.email.test(value) ? 'Success' : 'Error';
      case 'phone':
        return this.phone.test(value) ? 'Success' : 'Error';
    }
  }
}

export const validateService = new Validation();
