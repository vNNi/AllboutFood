import color from "../../Assets/Colors/index";
export default {
    title: {
        fontFamily: 'Muli',
        fontSize: '32px',
        fontWeight: "semi-bold",
        textAlign: "center",
        paddingBottom: "15px",
        paddingTop: '1em',
        borderBottom: `3px ${color.primaryYellow} solid`,
        marginBottom: "1em",
        marginLeft: "15%",
        marginRight: "15%",
    },
    container: {
        margin: "15% 2em",
    },
    label: {
        fontWeight: "bold",
        fontSize: "1em",
        fontFamily: "Open Sans, sans-serif",
    },
    content: {
        padding: "15px",
        backgroundColor: color.lightGrey,
        fontFamily: "Muli",
        fontSize: "1em"
    },
    caution: {
        backgroundColor: color.lightRed,
        color: "white",
        padding: "15px",
        fontFamily: "Muli",
        fontSize: "1em",
    },
    health: {
        backgroundColor: color.lightGreen,
        color: "white",
        padding: "15px",
        fontFamily: "Muli",
        fontSize: "1em",
    },
    energy: {
        backgroundColor: color.lightYellow,
        color: "white",
        padding: "15px",
        fontFamily: "Muli",
        fontSize: "1em",
    }
}