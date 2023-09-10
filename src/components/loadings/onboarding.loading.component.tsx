import React, {FC, useEffect, useState} from "react"
import MaintenanceModePage from "../../pages/maintenance/maintenance.mode.page";
import Box from "@mui/material/Box";

export const OnboardingLoadingComponent = () => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [maintenanceMode, setMaintenanceMode] = useState<boolean>(true)

    return(
        isLoading ?
        <></>
            :
            maintenanceMode ?
                <MaintenanceModePage/>

                : <></>
    )
}

export default OnboardingLoadingComponent