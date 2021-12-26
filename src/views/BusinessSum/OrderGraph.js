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
import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = Array.from({length:30}, (_, i) => i+1)  // Replace data

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
    return (
        <Box>
            <Bar
                data={{
                        labels,
                        datasets:[
                            {
                                label:'Total Income (RM)',
                                data:labels.map(() => faker.datatype.number({min:1, max:2000})),
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