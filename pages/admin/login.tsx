import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TextFieldInput from '@/components/common/CustomInput/TextFieldInput'
import Meta from '@/components/common/Meta/Meta'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import LoadingButton from '@/components/common/Button/LoadingButton'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { cookies } from 'next/headers'

interface IFormValue {
  email: string
  password: string
}

const schema = yup.object({
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Vui lòng nhập đúng địa chỉ email'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
})

const Login: React.FC = () => {
  const [showIcon, setShowIcon] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const { control, handleSubmit } = useForm<IFormValue>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmitLogin = (data: IFormValue) => {
    console.log(data)
  }

  return (
    <>
      <Meta title="Đăng nhập" description="Đăng nhập" />
      <main className="h-[100vh] flex items-center">
        <div className="hidden md:flex-grow md:flex md:justify-center">
          <Image
            src={require('@/assets/illustration_dashboard.png')}
            alt=""
            className=""
          />
        </div>
        <div className="w-[480px] flex flex-col mx-auto px-4 lg:px-[64px]">
          <h3 className="text-[32px] capitalize font-semibold">đăng nhập</h3>
          <div className="mb-[24px] mt-[16px]">
            <span className="text-[0.875rem] font-normal">
              Bạn chưa có tài khoản?{' '}
            </span>
            <Link
              href={'/admin/register'}
              className="text-[#00ab55] font-semibold"
            >
              Tạo tài khoản mới
            </Link>
          </div>
          <form
            method="post"
            className="w-full"
            onSubmit={handleSubmit(onSubmitLogin)}
          >
            <TextFieldInput
              type="email"
              name="email"
              placeholder="Nhập email"
              control={control}
            />
            <div className="mt-[24px]">
              <TextFieldInput
                type={showIcon ? 'text' : 'password'}
                name="password"
                control={control}
                placeholder="Nhập mật khẩu"
                icon={showIcon ? <BsEyeFill /> : <BsEyeSlashFill />}
                onClick={() => setShowIcon((prev) => !prev)}
              />
            </div>
            <div className=" my-4 text-end">
              <Link
                href={'/forgot-password'}
                className="text-[0.875rem] underline decoration-solid"
              >
                Quên mật khẩu?{' '}
              </Link>
            </div>
            <LoadingButton
              type="submit"
              name="đăng nhập"
              loading={isLoading}
              disable={isLoading}
              onClick={() => {
                handleSubmit(onSubmitLogin)
              }}
              class="w-full text-white py-[12px] px-[27px] bg-[#212b36] rounded-lg leading-7 capitalize font-bold hover:shadow-[rgba(145, 158, 171, 0.16) 0px 8px 16px 0px]"
            />
          </form>
        </div>
      </main>
    </>
  )
}

export default Login
