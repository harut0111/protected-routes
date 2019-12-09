import React from 'react';
import Auth from './Auth'

const LandingPage:React.FC = (props: any) => {



    return (
        <div className='landingPage'>
            <h1>landing Page</h1>
            <button onClick={() => Auth.login(() => {
                props.history.push('/app');
            })}>Login</button>
        </div>
    )
}

export default LandingPage
