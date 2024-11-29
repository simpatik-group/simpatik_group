class Validation {
  readonly name = /^\p{Letter}(?:(?:[-\s`'"]?\p{Letter}){2,30}[\s]{0,1})$/u;
  readonly message =
    /^\p{Letter}(?:(?:[-\s`\(\)!\?,.'"\n]{0,2}\p{Letter}){2,300}[\s\n]?)$/u;
  readonly phone = /^\+?[\d-()]{16}$/;
  readonly email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
}

export const validateService = new Validation();
