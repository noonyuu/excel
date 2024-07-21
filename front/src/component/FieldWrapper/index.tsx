import { PropsWithChildren } from 'react'

export type FieldWrapperProps = PropsWithChildren<{
  errorMessage?: string
}>

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  errorMessage,
  children
}) => {
  return (
    <>
      {children}
      {errorMessage && <div className="mt-1 text-red-500">{errorMessage}</div>}
    </>
  )
}
