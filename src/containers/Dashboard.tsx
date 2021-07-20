import { AppBar, Typography } from '@material-ui/core'
import React from 'react'

function Dashboard() {
    return (
        <>
          <AppBar position = 'sticky'>
            <Typography variant = 'h4' align = 'center'>
              Compete Board
            </Typography>  
          </AppBar>
        </>
    )
}

export default Dashboard
