import { SxProps } from '@mui/material';

export const buttonsWrapper = {
    display: "flex",
    justifyContent: "center",
    margin: "5vh",
    paddingRight: "8vw",
}

export const createButton: SxProps = {
    backgroundColor: "#D81E5B",
    color: "#EFF5F5",
    marginRight: "1vw",
    "&:hover": {
        color: "#D81E5B",
        backgroundColor: "white",
        border: "3px solid #D81E5B"
      },

}

export * as styles from './styles';