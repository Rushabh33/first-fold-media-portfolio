export interface FieldErrors {
  [key: string]: boolean;
}

export enum FORM {
  ID = 'xleyqqdb',
  EMAIL = 'email',
  MESSAGE = 'message',
}

export interface FormInputs {
  email: string;
  message: string;
  [key: string]: string;
}

export interface ServerState {
  submitting: boolean;
  status?: { ok: boolean; msg: string } | null;
}

export interface ValidationRules {
  [key: string]: (val: string) => boolean | '';
}
