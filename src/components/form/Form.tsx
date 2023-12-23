import { useForm, ValidationError } from '@formspree/react';
import { Input as NextInput, Textarea } from '@nextui-org/react';
import { Button } from '../blocks/button';
import { ARROW_TYPES, CONTACT_FORM as FORM } from '../constants';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  FieldErrors,
  FormInputs,
  ServerState,
  ValidationRules,
} from './form.types';

export function ContactFrom() {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [inputs, setInputs] = useState<FormInputs>({
    email: '',
    message: '',
  });
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
    status: null,
  });

  const validationRules: ValidationRules = {
    email: (val: string) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: (val: string) => !!val,
  };
  const validate = () => {
    let errors: FieldErrors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors ||= errors[key];
    }
    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = (field: string) => {
    if (fieldErrors[field]) {
      return (
        <p className='-mt-6 text-red-600 text-sm sm:text-base'>
          Please enter a valid {field}.
        </p>
      );
    }
  };
  useEffect(() => {
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFieldErrors({});
    }
  };
  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setServerState({ submitting: false });
      return;
    }
    setServerState({ submitting: true });

    try {
      const response = await fetch(`https://formspree.io/f/${FORM.ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      handleServerResponse(true, 'Thanks! We will get back to you shortly.');
    } catch (error) {
      if (error instanceof Error) {
        handleServerResponse(false, error.message);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} noValidate id='form'>
        <NextInput
          id={FORM.EMAIL}
          type={FORM.EMAIL}
          name={FORM.EMAIL}
          variant='underlined'
          label={FORM.EMAIL.toUpperCase()}
          onChange={handleOnChange}
          value={inputs.email}
          className='pb-6'
          disabled={serverState.status?.ok}
        />
        {renderFieldError('email')}
        <Textarea
          id={FORM.MESSAGE}
          name={FORM.MESSAGE}
          variant='underlined'
          label={FORM.MESSAGE.toUpperCase()}
          prefix={FORM.MESSAGE.toUpperCase()}
          onChange={handleOnChange}
          value={inputs.message}
          className='pb-7'
          disabled={serverState.status?.ok}
        />
        {renderFieldError('message')}
        <div className='flex justify-between items-end'>
          <span>
            {serverState.status?.msg && (
              <strong className='px-1 bg-yellow-400 text-black'>
                {serverState.status?.msg}
              </strong>
            )}
          </span>
          <Button
            arrowType={ARROW_TYPES.EXTERNAL_LINK}
            type='submit'
            disabled={serverState.submitting || serverState.status?.ok}
            classNames='mt-4'
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
