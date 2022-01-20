import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut} from "react-chartjs-2";
import faker from 'faker';
import {Box} from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['nasi lemak', 'laksa', 'mee goreng']; // Replace data from database

function PopularItems(props) {

    const data = props.data
    console.log(data[0].method)
    return (
        <Box mt={3}>
            <Doughnut
                data={{
                    labels,
                    datasets:[
                        {
                            label:'Sold',
                            data: labels.map(() => faker.datatype.number({min:0, max:50})),
                            backgroundColor: ['#e6a84c', '#40c7be', '#1dcc7d'],
                        }
                    ]
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
                            }
                        }
                    }
                }}
             />
        </Box>
    );
}

export default PopularItems;