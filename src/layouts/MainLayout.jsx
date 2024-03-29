import React from 'react'
import { HeaderComponent } from '../components'
import { FooterComponent } from '../components'

export const MainLayout = ({ children }) => {

    const styles = {
        backgroundColor: "white",
        color: "black",
        fontSize: "2rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
    }
    
    return (
        <div style={styles} className='main'>
            <HeaderComponent/>
            {children}
            <FooterComponent/>
        </div>
    )
}
