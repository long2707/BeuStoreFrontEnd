import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type TChart = {
  color1: string
  color2: string
  dataSeries: number[]
}

const AreaChart = ({ color1, color2, dataSeries }: TChart) => {
  const generateColors = (data: number[]) => {
    return data.map((d, idx) => {
      let color = d < 50 ? color1 : color2

      return {
        offset: (idx / data.length) * 114,
        color,
        opacity: 0.9,
      }
    })
  }
  return (
    <div className="">
      <Chart
        options={{
          dataLabels: { enabled: false },
          chart: {
            toolbar: {
              show: false,
            },

            sparkline: { enabled: true },
          },
          tooltip: {
            fixed: { enabled: false },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function (seriesName) {
                  return ''
                },
              },
            },
            marker: { show: false },
          },

          grid: {
            show: false,
          },
          legend: { show: false },
          markers: {
            size: 0,
            colors: color1,
            strokeColors: '',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: 'circle',
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: 6,
              sizeOffset: 3,
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 1,
              opacityTo: 1,
              colorStops: generateColors(dataSeries),
            },
          },
          stroke: {
            width: 3.5,
            curve: 'smooth',
          },
        }}
        //series={[{ data: [30, 4, 54, 6, 7, 300] }]}
        series={[
          {
            data: dataSeries,
          },
        ]}
        type="line"
        width={'96'}
        height={'64'}
      />
    </div>
  )
}

export default AreaChart
