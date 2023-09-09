import React from "react"
import {Box, Typography} from "@mui/material";
import AppLoadingComponent from "../../components/loadings/app.loading.component";

const MaintenanceModePage = () => {
    return(
        <Box sx={{
            width:"100vw",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
            
        }}>
            <Typography sx={{
                fontSize:"30px",
                color:"white",
                position:"relative",
                top:"20%"
            }}>
                Coming Soon
            </Typography>
            <AppLoadingComponent/>
        </Box>
    )
}

export default MaintenanceModePage