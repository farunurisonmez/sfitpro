import React from "react"
import {Box, Container, Typography} from "@mui/material";
import AppLoadingComponent from "../../components/loadings/app.loading.component";

const MaintenanceModePage = () => {
    return(
        <Container sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100vw",
            height:"100vh"
        }}>
            <Box sx={{
                paddingTop:"30px",
                paddingBottom:"20px",
                paddingLeft:"15px",
                paddingRight:"15px",
                textAlign:"center",
                width:"750px",
                marginLeft:"auto",
                marginRight:"auto",
                position:"relative",
                backgroundColor:"transparent",
                border:"3px solid white",
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-start",
                    alignItems:"center",
                }}>
                    <Typography sx={{
                        fontSize:"50px",
                        fontWeight:600,
                        fontFamily:"'Teko', sans-serif",
                        color:"white",
                        position:"relative",
                    }}>
                        Off Day! Yakında Geri Dönüyoruz.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize:"20px",
                            fontWeight:300,
                            fontFamily:"'Teko', sans-serif",
                        }}
                    >
                        Sitemizi biraz toparlamaya çalışıyoruz, çünkü her şey yolunda gittiğinde,
                        ağırlıkları kaldırmak daha kolaydır. Sporla dolu harika bir deneyim yakında geliyor!
                    </Typography>
                    <Box sx={{
                        marginTop:"10rem"
                    }}>
                        <AppLoadingComponent/>
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}

export default MaintenanceModePage