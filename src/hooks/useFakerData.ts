import { useEffect, useState } from "react";
import { generateFakerData } from "../utils/generateFakerData";
import { IFakerData } from "../types";

export const useFakerData = () => {

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric", weekday: "long", timeZone: "UTC",
    hour: "numeric", minute: "numeric"
};
    const [fakerData, setFakerData] = useState<IFakerData>();

    useEffect(() => {
      const loadData = generateFakerData();
      setFakerData(loadData);
    }, []);
    
    const splitData = (data?: Date) => 
    data && data.toLocaleString("en-US", options).split(' ').map((el, index) => {
        if(index === 1) return el.slice(0,3)
         else return el 
    }).join(' ')
    
    const castomDate = {
        dateStart: splitData(fakerData?.startdate),
        dateCompletion: splitData(fakerData?.completionDate),
        description: fakerData?.description,
    }

    return castomDate
}