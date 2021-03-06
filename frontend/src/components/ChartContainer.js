import { ThemeContext } from '@emotion/react';
import { Typography, Box } from '@mui/material';
import React, { useContext } from 'react';
import { Area, AreaChart, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toLocale } from '../utils';

// const mock = [{ name: 1, uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 100, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]

const ChartContainer = ({ range, data, color }) => {
    const {palette:{mode}}=useContext(ThemeContext)
    return (
        <>
            <Box sx={{width:'100%',height:{xs:'160px',sm:'200px',md:'280px'}}}>
                <ResponsiveContainer>
                   
                    {color &&
                        <ComposedChart data={data.slice(-range)} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
                            <defs>
                                <linearGradient id={color} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={String(color)} stopOpacity={0.5} />
                                    <stop offset="60%" stopColor={String(color)} stopOpacity={0.15} />
                                    <stop offset="95%" stopColor={mode==='light'?'#eee':'#222'} stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <Tooltip content={<CustomToolTip />} />


                            <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
                                // style={{ strokeDasharray: `40% 60%` }}
                                dataKey="uv"
                                stroke={color}
                                dot={false}
                                legendType="none"
                                isAnimationActive={false}
                            />
                            <Area isAnimationActive={false} type="monotone" stroke={0} dataKey="uv" strokeWidth={2} fillOpacity={1} fill={`url(#${color})`} />
                        </ComposedChart>}

                </ResponsiveContainer>
            </Box>

        </>
    )
};
const CustomToolTip = ({ active, payload, label }) => {
    return (
        <>
            {payload && payload.length && 
            <Box sx={{bgcolor:'white',p:1,borderRadius:1,border:'1px solid #ddd'}}>
                {/* <Typography variant='body2'>{label}</Typography> */}
                <Typography variant='body2' color='success.light' className='no-select'>${toLocale(payload[0].value)}</Typography>
            </Box>
            }
        </>
    )
}
export default ChartContainer;
