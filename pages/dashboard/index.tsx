import React from 'react'
import AdminLayout from '@/components/Layout/Dashboard/AdminLayout'
import { GetServerSideProps } from 'next'
import axiosClient from '@/libs/axiosClient'
import Meta from '@/components/common/Meta/Meta'
import { useQuery } from '@tanstack/react-query'
import { AreaChart, LineChart } from '@/components/common/Charts'

import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6'

const Dashboard = () => {
  const [dataChart, setDataChart] = React.useState([])

  const { data, isError, isLoading } = useQuery({
    queryKey: ['getCategories'],
    queryFn: async () => {
      const { data } = await axiosClient.get('categories')
      if (data) {
        return data
      }
    },
  })

  return (
    <AdminLayout>
      <Meta title="Quản trị | BeuStore" description="Admin" />
      {/* {true ? (
        <h2>Hello loading...</h2>
      ) : ( */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {/* {data?.data.map((item: any) => (
          <h1 key={item.category_Name}>{item.category_Name}</h1>
        ))} */}
        {/* product sold start*/}
        <div className="">
          <div className="flex items-center w-full bg-white md:p-6 shadow-md rounded-2xl z-0">
            <div className="flex-grow">
              <h6 className="text-sm font-semibold text-gray-500 mb-4 ">
                {' '}
                Sản phẩm đã bán
              </h6>
              <h3 className="text-[2rem] leading-normal font-bold ">3,454</h3>
              <div className="flex items-center mt-4 mb-2">
                <span className="p-2 mr-2 bg-green-100 flex items-center rounded-full">
                  <FaArrowTrendUp className="text-xs text-green-500" />
                </span>
                <span className="fon font-semibold text-sm leading-normal">
                  +2.6
                </span>
                <span className="font-normal text-gray-500 text-sm leading-normal">
                  % so với tuần trước
                </span>
              </div>
            </div>
            <LineChart
              color1="#30A76F"
              color2="#5BE49B"
              dataSeries={[22, 8, 35, 50, 80, 77, 12, 87, 43]}
            />
          </div>
        </div>
        {/* product sold end */}

        {/* sales profit start*/}
        <div className="">
          <div className="shadow-md flex items-center bg-white w-full md:p-6 rounded-2xl">
            <div className="flex-grow">
              <h6 className="text-sm mb-4 font-semibold text-gray-500">
                {' '}
                Doanh thu
              </h6>
              <h3 className="text-[2rem] leading-normal font-bold ">123</h3>
              <div className="flex items-center mt-4 mb-2">
                <span className="p-2 mr-2 bg-red-100 flex items-center rounded-full">
                  <FaArrowTrendDown className="text-xs text-red-500" />
                </span>
                <span className="fon font-semibold text-sm leading-normal">
                  +2.6
                </span>
                <span className="font-normal text-gray-500 text-sm leading-normal">
                  % so với tuần trước
                </span>
              </div>
            </div>
            <LineChart
              color1="#00B8D9"
              color2="#61F3F3"
              dataSeries={[12, 14, 2, 47, 42, 15, 47, 75, 65]}
            />
          </div>
        </div>
        {/* sales profit end*/}

        {/* order start*/}
        <div className="">
          <div className="shadow-md flex items-center bg-white w-full md:p-6 rounded-2xl">
            <div className="flex-grow">
              <h6 className="text-sm mb-4 font-semibold text-gray-500">
                {' '}
                Đơn chờ xử lý
              </h6>
              <h3 className="text-[2rem] leading-normal font-bold">123</h3>
              <div className="flex items-center mt-4 mb-2">
                <span className="p-2 mr-2 bg-red-100 flex items-center rounded-full">
                  <FaArrowTrendDown className="text-xs text-red-500" />
                </span>
                <span className="fon font-semibold text-sm leading-normal">
                  +2.6
                </span>
                <span className="font-normal text-gray-500 text-sm leading-normal">
                  % so với tuần trước
                </span>
              </div>
            </div>
            <LineChart
              color1="#FFAB00"
              color2="#FFD666"
              dataSeries={[80, 45, 23, 56, 112, 45, 144, 45, 46]}
            />
          </div>
        </div>
        {/* order end*/}

        {/* all  */}
      </div>
      <AreaChart />
    </AdminLayout>
  )
}

export default Dashboard

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   let token = req.cookies['accessToken']
//   let role = req.cookies['role']
//   if (!token) {
//     return {
//       redirect: {
//         destination: '/auth/login',
//         permanent: false,
//       },
//       props: {},
//     }
//   }
//   if (token && role !== 'admin') {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//       props: {},
//     }
//   }
//   return {
//     props: {},
//   }
// }
