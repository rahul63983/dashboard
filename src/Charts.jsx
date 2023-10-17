import React from 'react'
import './chart.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip,PieChart, Pie, } from 'recharts';

const Charts = () => {
    const array = [
        {
            name: 'Jan',
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'April',
            pv: 3508,
            amt: 2000,
        },
        {
            name: 'May',
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'July',

            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sep',
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Oct',
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Nov',
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Dec',
            pv: 3800,
            amt: 2500,
        },


    ];

    const data1 = [
        { name: 'Total new Customer', value: 65 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    return (
        

            <div style={{ color: "black" }}>


                <div className="container" >

                    <div className="barContainer" >
                        <h2>Overview </h2>
                        <h6>Monthly Earning</h6>
                        <BarChart className='chartpie' data={array} width={400} height={300}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="pv" fill='#8883d8' />
                        </BarChart>
                    </div>

                    <div className="barContainer">
                        <h2>customer </h2>
                        <h6>Customer that buy products</h6>

                        <PieChart width={400} height={300}>
                            <Tooltip />
                            <Pie
                                data={data1}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                            />
                        </PieChart>
                    </div>
                </div>
            </div>
)
}

            export default Charts;