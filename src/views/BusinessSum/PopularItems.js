import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut} from "react-chartjs-2";
import faker from 'faker';
ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['nasi lemak', 'laksa', 'mee goreng']; // Replace data from database

function PopularItems(props) {
    return (
        <div>
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
                            text: 'Popular Items',
                        }
                    }
                }}

            />
        </div>
    );
}

export default PopularItems;