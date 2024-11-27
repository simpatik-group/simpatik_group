import { ChangeEvent, FormEvent, useState } from 'react';

type ValidationRule = {
  required?: boolean;
  pattern?: RegExp;
};

type ValidationErrors<T> = Partial<Record<keyof T, boolean>>;

interface UseFormOptions<T> {
  initialValues: T;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldRules: Record<keyof T, ValidationRule> = {} as Record<
    keyof T,
    ValidationRule
  >;

  const register = (fieldName: keyof T, rules?: ValidationRule) => {
    if (rules) {
      fieldRules[fieldName] = rules;
    }

    return {
      name: fieldName,
      value: values[fieldName] || '',
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        setValues((prev) => ({
          ...prev,
          [fieldName]: value,
        }));
        setErrors((prev) => ({
          ...prev,
          [fieldName]: false,
        }));
      },

      onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        setValues((prev) => ({
          ...prev,
          [fieldName]: value,
        }));
        if (rules) {
          const fieldError = validateField(value, rules);
          setErrors((prev) => ({
            ...prev,
            [fieldName]: fieldError,
          }));
        }
      },
    };
  };

  const validateField = (value: any, rules: ValidationRule): boolean => {
    if (rules.required && !value) {
      return true;
    } else if (!value && !rules.required) {
      return false;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return true;
    }

    return false;
  };

  const handleSubmit = (callback: (values: T) => void) => (e: FormEvent) => {
    e.preventDefault();

    const newErrors: ValidationErrors<T> = {};

    for (const key in fieldRules) {
      const fieldValue = values[key as keyof T];
      const fieldValidation = fieldRules[key as keyof T];
      const fieldError = validateField(fieldValue, fieldValidation);
      if (fieldError) {
        newErrors[key as keyof T] = fieldError;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      callback(values);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    setValues,
    setErrors,
    setIsSubmitting,
    register,
    handleSubmit,
  };
}
