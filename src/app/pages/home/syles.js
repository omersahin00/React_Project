import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        backgroundColor: "aqua",
        color: "black",
        padding: "10px 20px",
        borderRadius: "10px",
        "&:hover": {
            backgroundColor: "blue",
            color: "white"
        }
    }
});

export default useStyles;