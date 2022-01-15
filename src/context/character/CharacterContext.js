import { createContext, useContext, useReducer } from "react";
import { inititalState, reducer } from "../../reducer/charterReducer";

//creo el contexto
export const TaskContext = createContext()


//creo el componente que envuelve los components HOC

export const TaskProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, inititalState)

    return (
        <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>
    )

}

// useTask tiene acceso a state y dispatch
export const useTask = () => useContext(TaskContext)

