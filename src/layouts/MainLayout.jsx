import React from 'react'
import { HeaderComponent } from '../components'
import { FooterComponent } from '../components'

export const MainLayout = ({ children }) => {

    const styles = {
        backgroundColor: "white",
        color: "black",
        fontSize: "2rem"
    }
    return (
        <div style={styles}>
            <HeaderComponent/>
            {children}
            <FooterComponent/>
        </div>
    )
}
