import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}: any) => {
    return (
        <Route {...rest} render={
            (props) => {
                return <Component {...props} />
            }
        }/>
    )
}

export default ProtectedRoute
