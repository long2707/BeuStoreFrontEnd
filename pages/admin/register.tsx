import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TextFieldInput from '@/components/common/CustomInput/TextFieldInput'
import Meta from '@/components/common/Meta/Meta'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import LoadingButton from '@/components/common/Button/LoadingButton'

const Login: React.FC = () => {
  const [showIcon, setShowIcon] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

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
            <Link
              href={'/admin/login'}
              className="text-[#00ab55] font-semibold"
            >
              Đăng nhập
            </Link>
          </div>
          <div className="flex md:flex-row flex-col w-full md:gap-x-2 gap-y-[24px] mb-[24px]">
            <TextFieldInput type="text" name="firstName" placeholder="Họ" />
            <TextFieldInput type="text" name="lastName" placeholder="Tên" />
          </div>
          <TextFieldInput type="text" name="email" placeholder="Nhập email" />
          <div className="mt-[24px]">
            <TextFieldInput
              type={showIcon ? 'text' : 'password'}
              name="password"
              placeholder="Nhập mật khẩu"
              icon={showIcon ? <BsEyeFill /> : <BsEyeSlashFill />}
              onClick={() => setShowIcon((prev) => !prev)}
            />
          </div>
          <Link
            href={'/forgot-password'}
            className="text-[0.875rem] my-4 text-end underline decoration-solid"
          >
            Quên mật khẩu?
          </Link>
          <LoadingButton
            type="submit"
            name="đăng nhập"
            loading={isLoading}
            disable={isLoading}
            onClick={() => {
              setIsLoading((prev) => !prev)
            }}
            class="text-white py-[12px] px-[27px] bg-[#212b36] rounded-lg leading-7 capitalize font-bold hover:shadow-[rgba(145, 158, 171, 0.16) 0px 8px 16px 0px]"
          />
        </div>
      </main>
    </>
  )
}

export default Login
