import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from "react-chartjs-2";
import {Box} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

function PaymentMethod(props) {

    const data = props.data

    const groupMethod = data.reduce((group, item) => {
        const method = item.method;
        if(!group[method]){
            group[method] = [];
        }
        group[method].push(item.method);
        return group;
    }, {})

    const groupMethodArray = Object.keys(groupMethod).map((method) => {
        return{
            method,
            totalMethod: groupMethod[method].length
        }
    })

    return (
        <Box mt={3}>
            <Doughnut
                data={{
                    labels: [groupMethodArray[0].method, groupMethodArray[1].method],
                    datasets:[{
                            label:'',
                            data: [groupMethodArray[0].totalMethod, groupMethodArray[1].totalMethod],
                            backgroundColor: ['#556699', '#C564E2'],
                        }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio:false,
                    plugins:{
                        title:{
                            display: true,
                            text: 'Payment Method',
                            font:{
                                size: 20,
                            }}
                    }}}
            />
        </Box>
    );
}

export default PaymentMethod;