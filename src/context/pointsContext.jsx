import { createContext, useState } from "react";

export const PointsContext = createContext()
export const PointsProvider = ({children}) =>{
    const [score, setScore] = useState(0)
    const [soundBox,setSoundBox] = useState()
    
    return(
        <PointsContext.Provider value={{score, setScore,soundBox, setSoundBox}}>
            {children}
        </PointsContext.Provider>
    )
}

