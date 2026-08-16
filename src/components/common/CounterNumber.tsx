"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react';
type TCounterProps = {
    start:number,
    end: number,
    duration?: number,speed?:number, className?:string, style?:Record<string,unknown>}
const CounterNumber = ({start,end,duration=1000,speed=100, className="", style={}}:TCounterProps) => {
    const numberRef = useRef(start);
    const numberCounterFn = () =>{
        const increment =  end/(duration/speed);
        let currentCount = start;
        const countTimer = setInterval(()=>{
            if ((currentCount + increment) < end) {
                currentCount += increment;
                if (numberRef.current) {
                    // numberRef.current.innerText = parseInt(currentCount);
                    (numberRef.current as any).innerText = currentCount.toString();
                }
            }else{
                // console.log("Still Working Timmer.....", Date.now());
                if (numberRef.current) {
                    (numberRef.current as any).innerText = end;
                }
                clearInterval(countTimer);
            }
        },speed)
    }
    useEffect(numberCounterFn,[])

    return  <output className={className} style={{...style}} ref={numberRef as any}></output>
};

export default CounterNumber;