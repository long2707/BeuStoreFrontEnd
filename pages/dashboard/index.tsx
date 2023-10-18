import React from 'react'
import AdminLayout from '@/components/Layout/Dashboard/AdminLayout'
import { GetServerSideProps } from 'next'
import axiosClient from '@/libs/axiosClient'
import Meta from '@/components/common/Meta/Meta'
import { useQuery } from '@tanstack/react-query'
import AreaChart from '@/components/common/Charts/AreaChart'

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
      <div className="grid md:grid-cols-3 gap-3">
        {/* {data?.data.map((item: any) => (
          <h1 key={item.category_Name}>{item.category_Name}</h1>
        ))} */}
        {/* product sold start*/}
        <div className="">
          <div className="flex items-center w-full bg-white md:p-6">
            <div className="flex-grow">
              <p className=""> Sản phẩm đã bán</p>
              <h3 className="">3,454</h3>
              <div>
                <span></span>
                <span className="">2.6% so với tuần trước</span>
              </div>
            </div>
            <AreaChart
              color1="#30A76F"
              color2="#5BE49B"
              dataSeries={[22, 8, 35, 50, 80, 77, 12, 87, 43]}
            />
          </div>
        </div>
        {/* product sold end */}

        {/* sales profit start*/}
        <div className="">
          <div className="flex items-center bg-white w-full md:p-6">
            <div className="flex-grow">
              <p className=""> Sản phẩm đã bán</p>
              <h3 className="">3,454</h3>
              <div>
                <span></span>
                <span className="">2.6% so với tuần trước</span>
              </div>
            </div>
            <AreaChart
              color1="#00B8D9"
              color2="#61F3F3"
              dataSeries={[12, 14, 2, 47, 42, 15, 47, 75, 65]}
            />
          </div>
        </div>
        {/* sales profit end*/}

        {/* order start*/}
        <div className="">
          <div className="flex items-center bg-white w-full md:p-6">
            <div className="flex-grow">
              <p className=""> Sản phẩm đã bán</p>
              <h3 className="">3,454</h3>
              <div>
                <span></span>
                <span className="">2.6% so với tuần trước</span>
              </div>
            </div>
            <AreaChart
              color1="#FFAB00"
              color2="#FFD666"
              dataSeries={[80, 45, 23, 56, 112, 45, 144, 45, 46]}
            />
          </div>
        </div>
        {/* order end*/}
      </div>
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
