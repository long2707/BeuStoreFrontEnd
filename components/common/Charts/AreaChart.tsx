import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AreaChart = () => {
  return (
    <div className="mt-3 mx-3 lg:mt-6 lg:mx-6">
      <Chart
        options={{
          dataLabels: {
            enabled: false,
          },
          colors: ['#118D57', '#FFAB00'],
          chart: {
            zoom: { enabled: false },
            toolbar: { show: false },
            sparkline: { enabled: false },
          },
          markers: { strokeDashArray: 3 },
          stroke: {
            curve: 'smooth',
          },

          // xaxis
          xaxis: {
            type: 'category',
            categories: [
              'Tháng 1',
              'Tháng 2',
              'Tháng 3',
              'Tháng 4',
              'Tháng 5',
              'Tháng 6',
              'Tháng 7',
              'Tháng 8',
              'Tháng 9',
              'Tháng 10',
              'Tháng 11',
              'Tháng 12',
            ],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
              style: {
                colors: '#637381',
              },
            },
          },

          //yaxis
          yaxis: {
            labels: {
              style: {
                colors: '#637381',
              },
            },
          },
          //tooltip
          tooltip: {
            x: {
              show: true,
            },
          },

          // legend
          legend: {
            fontSize: '13',
            position: 'top',
            horizontalAlign: 'right',
            fontWeight: 500,
            markers: {
              radius: 12,
            },
            offsetY: -20,
          },

          // fill
          fill: {
            opacity: 1,
            gradient: {
              type: 'vertical',
              shadeIntensity: 0,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 100],
            },
          },

          // title
          title: {
            text: 'Doanh số bán hàng',

            style: {
              fontSize: '20',
              fontWeight: '600',
              fontFamily: "'Public Sans', sans-serif",
            },
          },

          //subtitle
          subtitle: {
            text: '+43% so với năm ngoái',
            style: {
              fontSize: '14',
              color: '#637381',
            },
          },
          states: {
            hover: {
              filter: {
                type: 'lighten',
                value: 0.04,
              },
            },
            active: {
              filter: {
                type: 'darken',
                value: 0.88,
              },
            },
          },

          // Grid
          grid: {
            strokeDashArray: 3,
            // borderColor: theme.palette.divider,
            xaxis: {
              lines: {
                show: false,
              },
            },
          },
        }}
        series={[
          {
            name: 'Sản phẩm đã bán',
            data: [31, 40, 28, 51, 42, 109, 100, 12, 43, 1, 344, 633],
          },
          {
            name: 'Doanh thu',
            data: [11, 32, 45, 32, 34, 52, 41, 324, 2, 223, 32, 124],
          },
        ]}
        type="area"
      />
    </div>
  )
}

export default AreaChart
