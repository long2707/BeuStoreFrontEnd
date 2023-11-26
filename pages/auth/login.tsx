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
import { GetServerSideProps } from 'next'
import { setCookie } from 'cookies-next'

import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import jwtDecode from 'jwt-decode'
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

type ErrorResponse = {
  message: string
}
const Login = () => {
  const [showIcon, setShowIcon] = React.useState<boolean>(false)
  //const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const { control, handleSubmit } = useForm<IFormValue>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const {
    mutate,
    isLoading,
    isError,
    error,
  }: UseMutationResult<AxiosResponse, Error, IFormValue> = useMutation({
    mutationFn: async (formBody: IFormValue) => {
      return await axiosClient.post('auth/login', formBody)
    },
    onSuccess: (data) => {
      setCookie('accessToken', data?.data?.accessToken)
      setCookie('refreshToken', data?.data?.refreshToken)

      let getUser: any = jwtDecode(data?.data?.accessToken)
      if (getUser?.role == 'admin' && data?.data?.accessToken) {
        return (window.location.href = '/dashboard')
      }
      return (window.location.href = '/')
    },
  })
  const onSubmitLogin = async (formBody: IFormValue) => {
    mutate(formBody)
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
              href={'/auth/register'}
              className="text-[#00ab55] font-semibold"
            >
              Tạo tài khoản mới
            </Link>
          </div>
          {isError && (
            <div className="flex items-center mb-4 py-3 bg-[#ffe9d5] px-2 text-red-500 text-lg rounded-lg leading-6">
              <span className="mr-2">
                <BsFillExclamationCircleFill />
              </span>
              <span className="text-sm">{error?.message}</span>
            </div>
          )}
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
                onClick={() => setShowIcon(!showIcon)}
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let token = req.cookies['accessToken']

  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
      },
      props: {},
    }
  }
  return {
    props: {},
  }
}
