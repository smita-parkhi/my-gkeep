import React from 'react'
import { createContext } from 'react'

const BaseContext = createContext(undefined);

function BaseProvider({ children, value }) {
    return (
        <BaseContext.Provider value={value}>
            {children}
        </BaseContext.Provider>
    );
}
export {BaseProvider , BaseContext};