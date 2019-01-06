import color from '../../Assets/Colors/index';
export default {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
    },
    imageError: {
        maxWidth: "230px",
        marginBottom: "2em",
    },
    description: {
        fontFamily: "Roboto",
        fontWeight: "semi-bold",
        textAlign: "center",
        marginBottom: "1em",
    },
    link: {
        textDecoration: "none",
        fontFamily: 'Muli',
        fontWeight: "bold",
        color: color.lightRed,
    },
}