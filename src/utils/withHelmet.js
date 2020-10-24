import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

function withHelmet (title){
    return Component => props => (
        <>
        <Helmet>
        <link href = 'https://fonts.google.com/specimen/Chilanka#standard-styles' 
        rel ='stylesheet'
        />
        <title>{title}</title>
    </Helmet>
    <Component {...props} />
    </>
    )
}
export default withHelmet