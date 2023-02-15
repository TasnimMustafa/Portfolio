import React from "react";

function SvgProgress({size,strokeWidth,percentage}){

    const viewBox = `0 0 ${size} ${size}`;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius*Math.PI*2;
    const dash = (percentage * circumference)/100;

    return (
        <React.Fragment>

            <svg width={size} height={size} viewBox={viewBox}>
                <circle

                    fill='none'
                    stroke='rgba(255,255,255,0.1)'
                    cx={size/2}
                    cy={size/2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                />

                <circle
                fill='none'
                stroke="url(#gradient)"

                cx={size/2}
                cy={size/2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                strokeDasharray={[dash, circumference-dash]}
                    />

                <defs>
                    <linearGradient id="gradient">

                        <stop offset="0%" stopColor="#e99dcb" />
                        <stop offset="50%" stopColor="#8099e9" />
                        <stop offset="100%" stopColor="#e99dcb" />

                    </linearGradient>
                </defs>

                <text
                fill='var(--main-color)'
                fontSize='20px'
                x='50%'
                y='20%'
                dy='50px'
                display='flex'
                textAnchor='middle'
                >
                    {`${percentage}%`}
                </text>

            </svg>

        </React.Fragment>
    )
}

export default SvgProgress;