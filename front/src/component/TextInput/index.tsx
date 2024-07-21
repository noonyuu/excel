import { FieldWrapper } from '../FieldWrapper'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export type TextInputProps<T extends FieldValues> = UseControllerProps<T> & {
  label?: string
  type?: string
}

export const TextInput = <T extends FieldValues>({
  label,
  type,
  ...props
}: TextInputProps<T>): JSX.Element => {
  const {
    field,
    fieldState: { error }
  } = useController(props)

  return (
    <FieldWrapper errorMessage={error?.message}>
      <input
        {...field}
        type={type}
        className="text-main-black w-40 rounded-md border bg-white p-1.5 focus:outline-none"
        placeholder={label}
        style={style.placeholder}
      />
    </FieldWrapper>
  )
}

const style = {
  placeholder: {
    fontSize: '0.5em'
  }
}
