import React from 'react'
import {render , fireEvent} from '@testing-library/react'
import ErrorBoundary from '../../src/ErrorHandling/ErrorBoundary'

//this component will be rendered once while working normally and another time with an error  to see if the  
//error boudary handles the error
function ThrowError({ shouldthrow}){
    if(shouldthrow){
        throw new Error('error')
    }
    else {
        return null
    }
}

test('calls component and renders that there was a problem ' , () => {
    const {rerender , getByText } = render(
        <ErrorBoundary>
            <ThrowError/>
        </ErrorBoundary>
    )
    rerender(
        <ErrorBoundary>
            <ThrowError shouldthrow={true}/>
        </ErrorBoundary>
    )
    const error = expect.any(Error);
    const errorInfo = {info : expect.stringContaining('error')};

})