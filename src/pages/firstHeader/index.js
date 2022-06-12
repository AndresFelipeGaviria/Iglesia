import { Grid, Typography } from '@mui/material'
import React from 'react'
import Logotipo from "../../images/logotipo.jpg";
import Audio from "../../sound/iglesia.mpeg"

const Index = () => {
  return (
      <>
        <Grid item lg={12}>
            <Typography>Iglesia ubicada en Rionegro Antioquia frente a empresa Autolarte. </Typography>
        </Grid>
        <audio controls autoplay={true} preload>
            <source src={Audio} type="audio/mpeg"/>
        </audio>
    </>
  )
}

export default Index