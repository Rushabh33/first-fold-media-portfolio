// interface NextUIInputProps {
//   classNames?: string;
//   type?: string;
//   id?: string;
//   name?: string;
//   errors?: any;
// }

// export function Input({
//   classNames,
//   type,
//   id,
//   name,
//   errors,
//   ...props
// }: NextUIInputProps) {
//   return (
//     <>
//       <label htmlFor={FORM.EMAIL}>Email Address</label>
//       <NextInput
//         className={` ${classNames || ''}`}
//         type={type}
//         variant='underlined'
//         id={id}
//         name={name}
//         {...props}

//       />
//        <ValidationError
//         prefix={FORM.EMAIL}
//         field={FORM.EMAIL}
//         errors={errors}
//       />
//     </>
//   );
// }
