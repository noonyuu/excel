import { SubmitHandler, useForm } from 'react-hook-form'
import pen from './pengin.webp'
import { z } from 'zod'
import React, { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from '@/component/TextInput'

const formSchema = z.object({
  userIdInput: z.string().min(8, { message: '8文字以上で入力してください' }),
  passwordInput: z.string().min(8, { message: '8文字以上で入力してください' })
})

type formSchema = z.input<typeof formSchema>

export const Login: React.FC = () => {
  const { control, handleSubmit } = useForm<formSchema>({
    defaultValues: {
      userIdInput: '',
      passwordInput: ''
    },
    // resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<formSchema> = useCallback((data) => {
    alert(JSON.stringify(data))
  }, [])

  return (
    <main>
      <div>
        <img className="size-full" src={pen} alt="" />
      </div>
      <div className="absolute left-1/2 top-1/2 z-20 h-32 w-40 -translate-x-1/2 flex-row justify-center">
        <div className="mt-3 space-y-2">
          <TextInput
            control={control}
            name={'userIdInput'}
            label={'ユーザーID'}
            type={'text'}
          />
          <TextInput
            control={control}
            name={'passwordInput'}
            label={'パスワード'}
            type={'password'}
          />
        </div>
        <div className="absolute bottom-3 right-0">
          <button
            className="border border-gray-200 bg-white p-1 text-sm text-gray-500"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            ログイン
          </button>
        </div>
      </div>
    </main>
  )
}
