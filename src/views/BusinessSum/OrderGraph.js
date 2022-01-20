import React from 'react';
import {Box} from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


let today = new Date();
let priorDate = new Date(new Date().setDate(today.getDate() - 29));

const getDaysArray = function (start, end) {
    let arr = [];
    let dt = new Date(start);
    for (; dt <= end; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt).toDateString());
    }
    return arr;
};
const dayList = getDaysArray(priorDate, today);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Total Income Bar Chart (Last 30 days)',
            font:{
                size: 20,
            }
        },
    },
};

function OrderGraph(props) {

    const data = props.data

    const group = data.reduce((group, item) =>{
        const date = item.timestamp.substr(0,15);
        if(!group[date]){
            group[date] = [];
        }
        group[date].push(item.amount);
        return group;
    },{})

    const groupArray = Object.keys(group).map((date) => {
            return{
                date,
                totalIncome: group[date].reduce((a,b) => {return a + b;})
            }
        })

    const valueList = () => {
        let value = []
        let i = 0;
        let n = 0;

        while(i < dayList.length){

            if(n >= groupArray.length || dayList[i] !== groupArray[n].date){
                value.push(0)
                i++;
            }else if(dayList[i] === groupArray[n].date){
                    value.push(groupArray[n].totalIncome)
                i++;
                n++;
            }
        }
        return value;
    }

    return (
        <Box mt={3}>
            <Bar
                data={{
                        labels:dayList,
                        datasets:[
                            {
                                label:'Total Income per day (RM)',
                                data: valueList(),
                                backgroundColor: '#4dbce8',
                            }
                        ]
                }}
                height={400}
                width={600}
                options={options}
            />
        </Box>
    );
}

export default OrderGraph;