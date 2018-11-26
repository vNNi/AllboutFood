import colors from '../../Assets/Colors/index';
export default {
    container: {

    },
    label: {
        fontFamily: 'Muli',
        fontSize: '18px',
        marginBottom: "1em",
    },
    formGroup: {
        marginTop: "1em",
    },
    input: {
        width: "100%",
        marginTop: "1em",
        borderTop: "0px solid",
        borderRight: "0px solid",
        borderLeft: "0px solid",
        borderBottom: "2px solid rgb(224, 224, 235)",
        backgroundColor: "tranparent",
    },
    textArea: {
        width: "100%",
        marginTop: "1em",
        borderTop: "0px solid",
        borderRight: "0px solid",
        borderLeft: "0px solid",
        borderBottom: `2px solid ${colors.primaryYellow}`,
        backgroundColor: "tranparent",
        height: "150px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5em",
    },
    button: {
        backgroundColor: colors.primaryBlue,
        border: "1px solid white",
        padding: "8px 42px",
        borderRadius: "24px",
        color: "white",
        lineHeight: "20px",
        fontSize: "1.2em"
    }
}