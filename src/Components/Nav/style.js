import colors from '../../Assets/Colors/index';
export default {
    container: {
        display: "flex",
        flex: "1",
        padding: "0px 5%",
        lineHeight: "50px",
        alignItems: "center",
        backgroundColor: colors.primaryBlue,
    },
    logo: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    menu: {
        height: "25px",
        display: "flex",
        cursor: "pointer",
    },
    imgLogo: {
        height: "45px",
        display: "flex",
        padding: "10px 0px",
    },
    menuContainer: {
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "absolute",
        top: "0px",
    },
    content: {
        minHeight: "100vh",
        width: "30%",
        disply: "flex",
        float: "left",
        backgroundColor: "white",
        position: "relative",
        minWidth: "250px",
    },
    logoContainer: {
        display: "flex",
        justifyContent: "center",
        height: "45px",
    },
    closeIcon: {
        position: "absolute",
        height: "35px",
        top: "0px",
        right: "10px",
        cursor: "pointer",
    },
}