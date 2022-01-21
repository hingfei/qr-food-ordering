import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from "react-chartjs-2";
import {Box} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

function PopularItems(props) {

    const data = props.data
    const item = []

    for(let i = 0; i < data.length; i++){
        let x = JSON.parse(data[i].orders)
        for(let j = 0; j < x.length; j++){
         item.push(x[j])
        }
    }

    const groupItem = item.reduce((group, item) => {
        const title = item.title;
        if(!group[title]){
            group[title] = [];
        }
        group[title].push(item.quantity);
        return group;
    },{})

    const groupItemArray = Object.keys(groupItem).map((title) => {
        return{
            title,
            itemQuantity: groupItem[title].reduce((a,b) => {return a + b;})
        }
    })
    groupItemArray.sort(function(a,b){return b.item - a.item})

    return (
        <Box mt={3}>
            <Doughnut
                data={{
                    labels: [groupItemArray[0].title, groupItemArray[1].title, groupItemArray[2].title, groupItemArray[3].title],
                    datasets:[
                        {
                            label:'Sold',
                            data: [groupItemArray[0].itemQuantity, groupItemArray[1].itemQuantity, groupItemArray[2].itemQuantity, groupItemArray[3].itemQuantity],
                            backgroundColor: ['#e6a84c', '#40c7be', '#1dcc7d', '#F36374'],
                        }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio:false,
                    plugins:{
                        title:{
                            display: true,
                            text: 'Popular Items',
                            font:{
                                size: 20,
                            }}
                    }
                }}
             />
        </Box>
    );
}

export default PopularItems;