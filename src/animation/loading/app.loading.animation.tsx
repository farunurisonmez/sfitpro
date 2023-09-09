import React from "react"
import Box from "@mui/material/Box";

type IBench = {
    children: JSX.Element[],
};

type ISupport = {
    children: JSX.Element,
};

const Bench = (props: IBench) => {
    return (
        <Box sx={{
            position: "absolute",
            width: "280px",
            height: "10px",
            backgroundColor: "#476098",
            borderRadius: "10px"
        }}>
            {props.children}
        </Box>
    )
}

const Support = (props: ISupport) => {
    return (
        <Box sx={{
            position: "relative",
            backgroundColor: "#333",
            top: "100%",
            left: "3%",
            width: "265px",
            height: "5px",
            borderRadius: "5px",
        }}>
            {props.children}
        </Box>
    )
}

const Hanger = () => {
    return (
        <Box sx={{
            position: "relative",
            backgroundColor: "#333",
            top: "-1500%",
            left: "90%",
            width: "15px",
            height: "260px",
        }}>
            <Box sx={{
                position: "relative",
                backgroundColor: "#333",
                top: "10%",
                left: "-100%",
                width: "20px",
                height: "3px"
            }}/>
            <Box sx={{
                position: "absolute",
                backgroundColor: "#333",
                top: "99%",
                left: "-160%",
                width: "65px",
                height: "10px",
            }}
            />
        </Box>
    )
}

const Stand = () => {
    return (
        <Box sx={{
            position: "relative",
            backgroundColor: "#333",
            top: "10%",
            left: "10%",
            width: "15px",
            height: "102px",
            borderRadius: "1px"
        }}>
            <Box sx={{
                position: "relative",
                backgroundColor: "#333",
                top: "95%",
                left: "-140%",
                width: "55px",
                height: "10px",
            }}>

            </Box>
        </Box>
    )
}

const Human = () => {
    const LeftLegBelowTheKneecap = () => {
        const LeftFoot = () => {
            return (
                <Box sx={{
                    position: "relative",
                    backgroundColor: "#333",
                    height: "20px",
                    width: "40px",
                    top: "95%",
                    left: "-150%",
                    borderRadius: "5px",
                    zIndex: 70
                }}>

                </Box>
            )
        }

        return (
            <Box sx={{
                position: "relative",
                backgroundColor: "#FDA76D",
                height: "126px",
                width: "15px",
                top: "-2810%",
                left: "-9%",
                borderRadius: "7px",
                zIndex: 70,
                msTransform: "rotate(-15deg)",
                transform: "rotate(-15deg)",
                animation: "movement 3s infinite linear",
                '@keyframes movement': {
                    "0%": {
                        transform: "rotate(-10deg)",
                    },
                    "40%": {
                        transform: "rotate(-10deg)",
                    },
                    "50%": {
                        transform: "rotate(10deg)",
                    },
                    "65%": {
                        transform: "rotate(10deg)",
                    },
                    "100%": {
                        transform: "rotate(-10deg)",
                    }
                }
            }}>
                <LeftFoot/>
            </Box>
        )
    }

    const RightLegBelowTheKneecap = () => {
        const RightFoot = () => {
            return (
                <Box sx={{
                    position: "relative",
                    backgroundColor: "#333",
                    height: "20px",
                    width: "40px",
                    top: "95%",
                    left: "-150%",
                    borderRadius: "5px",
                    zIndex: 100
                }}>

                </Box>
            )
        }

        return (
            <Box sx={{
                position: "relative",
                backgroundColor: "#FDA76D",
                height: "126px",
                width: "15px",
                top: "-4050%",
                left: "-13%",
                borderRadius: "7px",
                zIndex: 100,
                msTransform: "rotate(-15deg)",
                transform: "rotate(-15deg)",
                animation: "movement 3s infinite linear",
                '@keyframes movement': {
                    "0%": {
                        transform: "rotate(-10deg)",
                    },
                    "40%": {
                        transform: "rotate(-10deg)",
                    },
                    "50%": {
                        transform: "rotate(10deg)",
                    },
                    "65%": {
                        transform: "rotate(10deg)",
                    },
                    "100%": {
                        transform: "rotate(-10deg)",
                    }
                }
            }}>
                <RightFoot/>
            </Box>
        )
    }

    const RightLegAboveTheKneecap = () => {
        return (
            <Box sx={{
                position: "relative",
                backgroundColor: "#61967B",
                width: "156px",
                height: "20px",
                top: "-5370%",
                left: "-15%",
                borderRadius: "7px",
                zIndex: 90,
                animation: "RightLegAboveTheKneecapAnim 3s infinite linear",
                '@keyframes RightLegAboveTheKneecapAnim': {
                    "0%": {
                        left: "-15%",
                    },
                    "40%": {
                        left: "-15%",
                    },
                    "50%": {
                        left: "-8%"
                    },
                    "65%": {
                        left: "-8%"
                    },
                    "100%": {
                        left: "-15%",
                    }
                }

            }}>

            </Box>
        )
    }

    const Belt = () => {
        return (
            <Box sx={{
                position: "relative",
                backgroundColor: "#8BC34A",
                width: "15px",
                height: "45px",
                top: "-5800%",
                left: "20%",
                borderRadius: "3px",
                zIndex: 100
            }}>

            </Box>
        )
    }

    const Stomach = () => {
        return (
            <Box sx={{
                position: "relative",
                top: "-6450%",
            }}>
                <Box sx={{
                    position: "relative",
                    backgroundColor: "#FF8A65",
                    width: "56px",
                    height: "30px",
                    top: "20px",
                    left: "21%",
                    borderRadius: "5px",
                    zIndex: 90,
                    opacity: 1,
                    msTransform: "rotate(-15deg)",
                    transform: "rotate(-15deg)"
                }}>

                </Box>
                <Box sx={{
                    position: "relative",
                    backgroundColor: "#cf4645",
                    width: "86px",
                    height: "35px",
                    left: "20%",
                    borderRadius: "7px",
                    zIndex: 90,
                }}>

                </Box>

            </Box>
        )
    }


    const Chest = () => {
        return (
            <Box sx={{
                position: "relative",
                top: "-7270%",
            }}>

                <Box sx={{
                    position: "relative",
                    backgroundColor: "#FF8A65",
                    width: "103px",
                    height: "80px",
                    left: "30%",
                    borderRadius: "60px",
                    zIndex: 20,
                    opacity: 1,
                    animation: "ChestAnim 3s infinite linear",

                }}>
                </Box>
                <Box sx={{
                    position: "relative",
                    backgroundColor: "#cf4645",
                    width: "86px",
                    height: "60px",
                    top: "-60px",
                    left: "37%",
                    borderRadius: "40px",
                    zIndex: 150,
                    animation: "ChestAnim 3s infinite linear",
                    '@keyframes ChestAnim': {
                        "0%": {
                            transform: "translateY(0%)",
                        },
                        "40%": {
                            transform: "translateY(0%)",
                        },
                        "50%": {
                            transform: "translateY(5%)",
                        },
                        "65%": {
                            transform: "translateY(5%)",
                        },
                        "100%": {
                            transform: "translateY(0%)",
                        }
                    }
                }}>
                </Box>
            </Box>
        )
    }

    const Hand = () => {

        const DumbbellInHand = () =>{
            const DumbbellDiscs = () => {
                return(
                    <>
                        <Box sx={{
                            position:"relative",
                            backgroundColor:"#0077B5",
                            top:"5%",
                            left:"5%",
                            width:"100px",
                            height:"100px",
                            borderRadius: "100%",
                        }}>
                            <Box sx={{
                                position:"relative",
                                backgroundColor:"#222",
                                top:"10%",
                                left:"10%",
                                width:"80px",
                                height:"80px",
                                borderRadius: "100%",
                            }}>
                                <Box sx={{
                                    position:"relative",
                                    backgroundColor:"#eee",
                                    top:"40%",
                                    left:"40%",
                                    width:"20px",
                                    height:"20px",
                                    borderRadius: "100%",
                                }}>

                                </Box>
                            </Box>
                        </Box>

                    </>
                )
            }
            return(
                <Box sx={{
                    position:"relative",
                    top:"0%",
                    left:"-75%",
                    backgroundColor:"#222",
                    width:"110px",
                    height:"110px",
                    borderRadius: "100%",
                    zIndex: 150,
                    transform:"translateY(-60%)",
                }}>
                    <DumbbellDiscs/>
                </Box>
            )
        }
        return(
            <Box sx={{
                position:"absolute",
                backgroundColor:"#Fda76d",
                width:"36px",
                height:"136px",
                top:"-100%",
                left:"45%",
                borderRadius: "60px",
                zIndex: 170,
                transform:"translateY(-60%)",
                animation: "HandAnim 3s infinite linear",
                '@keyframes HandAnim': {
                    "0%": {
                        top:"-100%",
                    },
                    "40%": {
                        top:"-100%",
                    },
                    "50%": {
                        top:"-670%",
                    },
                    "65%": {
                        top:"-670%",
                    },
                    "100%": {
                        top:"-100%",
                    }
                }
            }}>
                <DumbbellInHand/>
            </Box>
        )
    }

    const Neck = () => {
        return(
            <Box sx={{
                position:"absolute",
                backgroundColor:"#cf4645",
                top:"-450%",
                left:"60%",
                width:"25px",
                height:"46px",
                borderRadius: "10px",
                zIndex:150
            }}>
            </Box>
        )
    }

    const Head = () => {
        return(
            <Box sx={{
                position:"absolute",
                backgroundColor:"#Fda76d",
                top:"-400%",
                width:"66px",
                height:"40px",
                left:"59%",
                zIndex: 90,
                borderRadius: "5px",
                animation:"HeadAnim 3s infinite linear",
                '@keyframes HeadAnim': {
                    "0%": {
                        transform:"rotate(0deg)",
                    },
                    "40%": {
                        transform:"rotate(0deg)",
                    },
                    "50%": {
                        transform:"rotate(-15deg)",
                    },
                    "53%": {
                        transform:"rotate(-15deg)",
                    },
                    "56%": {
                        transform:"rotate(0deg)",
                    },
                    "59%": {
                        transform:"rotate(-4deg)",
                    },
                    "62%": {
                        transform:"rotate(-2deg)",
                    },
                    "65%": {
                        transform:"rotate(0deg)",
                    },
                    "100%": {
                        transform:"rotate(0deg)",
                    }
                }
            }}/>
        )
    }

    return (
        <>
            <LeftLegBelowTheKneecap/>
            <RightLegBelowTheKneecap/>
            <RightLegAboveTheKneecap/>
            <Belt/>
            <Stomach/>
            <Chest/>
            <Hand/>
            <Neck/>
            <Head/>
        </>
    )
}

const AppLoadingAnimation = () => {
    return (
        <>
            <Bench>
                <Support>
                    <Stand/>
                </Support>
                <Hanger/>
                <Human/>
            </Bench>
        </>
    )
}

export default AppLoadingAnimation