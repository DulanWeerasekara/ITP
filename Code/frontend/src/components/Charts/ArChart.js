import React from 'react'
import {Chart as ChartJs,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,ArcElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,ArcElement)

function ArChart() {

    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((income) =>{
            const {date} = income
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .3
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .3
            }
        ]
    }

    return (
    <ChartStyled>
      <Line data={data}/>
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background: #FFFFFF;    
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100% ;
    width: 100%;

`

export default ArChart