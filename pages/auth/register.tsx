import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TextFieldInput from '@/components/common/CustomInput/TextFieldInput'
import Meta from '@/components/common/Meta/Meta'
import {
  BsEyeSlashFill,
  BsEyeFill,
  BsFillExclamationCircleFill,
} from 'react-icons/bs'
import LoadingButton from '@/components/common/Button/LoadingButton'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axiosClient from '@/libs/axiosClient'

interface IFormValue {
  firstName: string
  lastName: string
  email: string
  password: string
}

const schema = yup.object({
  firstName: yup.string().required('Nhập đầy đủ thông tin!'),
  lastName: yup.string().required('Nhập đầy đủ thông tin!'),
  email: yup
    .string()
    .email('Nhập đúng địa chỉ email')
    .required('Nhập đầy đủ thông tin!'),
  password: yup
    .string()
    .required('Nhập đầy đủ thông tin!')
    .min(6, 'Mật khẩu phải ít nhất 6 ký tự'),
})

const Register: React.FC = () => {
  const [showIcon, setShowIcon] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [messageError, setMessageError] = React.useState<string>('')
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const onSubmitRegister = async (data: IFormValue) => {
    setIsLoading(true)
    try {
      let res = await axiosClient.post('auth/register', data)
      if (res.data?.success) {
        window.location.href = '/admin/login'
      } else {
        setMessageError(res?.data?.data?.message)
      }
    } catch {}
    setIsLoading(false)
  }
  return (
    <>
      <Meta title="Đăng kí" description="Đăng kí" />
      <main className="h-[100vh] flex items-center">
        <div className="hidden md:flex-grow md:flex md:justify-center">
          <Image
            src={require('@/assets/illustration_dashboard.png')}
            alt=""
            className=""
          />
        </div>
        <div className="w-[480px] flex flex-col mx-auto px-4 lg:px-[64px]">
          <h3 className="text-[32px] capitalize font-semibold">đăng kí</h3>
          <div className="mb-[24px] mt-[16px]">
            <span className="text-[0.875rem] font-normal">
              Bạn đã có tài khoản?{' '}
            </span>
            <Link href={'/auth/login'} className="text-[#00ab55] font-semibold">
              Đăng nhập
            </Link>
          </div>
          {messageError && (
            <div className="flex items-center mb-4 py-3 bg-[#ffe9d5] px-2 text-red-500 text-lg rounded-lg leading-6">
              <span className="mr-2">
                <BsFillExclamationCircleFill />
              </span>
              <span className="text-sm">{messageError}</span>
            </div>
          )}
          <form
            method="post"
            action=""
            onSubmit={handleSubmit(onSubmitRegister)}
          >
            <div className="flex md:flex-row flex-col w-full md:gap-x-2 gap-y-[24px] mb-[24px]">
              <TextFieldInput
                type="text"
                name="firstName"
                control={control}
                placeholder="Họ"
              />
              <TextFieldInput
                type="text"
                name="lastName"
                control={control}
                placeholder="Tên"
              />
            </div>
            <TextFieldInput
              type="text"
              name="email"
              control={control}
              placeholder="Nhập email"
            />
            <div className="mt-[24px]">
              <TextFieldInput
                type={showIcon ? 'text ' : 'password'}
                name="password"
                placeholder="Nhập mật khẩu"
                control={control}
                icon={showIcon ? <BsEyeFill /> : <BsEyeSlashFill />}
                onClick={() => setShowIcon(!showIcon)}
              />
            </div>
            <div className="py-4 text-end">
              <Link
                href={'/forgot-password'}
                className="text-[0.875rem] underline decoration-solid"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <LoadingButton
              type="submit"
              name="đăng nhập"
              loading={isLoading}
              disable={isLoading}
              onClick={() => {
                handleSubmit(onSubmitRegister)
              }}
              class="w-full text-white py-[12px] px-[27px] bg-[#212b36] rounded-lg leading-7 capitalize font-bold hover:shadow-[rgba(145, 158, 171, 0.16) 0px 8px 16px 0px]"
            />
          </form>
        </div>
      </main>
    </>
  )
}

export default Register
