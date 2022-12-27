import { SxProps } from '@mui/material';

export const buttonsWrapper = {
    display: "flex",
    justifyContent: "center",
    margin: "5vh",
    paddingRight: "10vw",
}
export const getButton: SxProps = {
    backgroundColor: "#EF9A53",
    color: "#EFF5F5",
    marginRight: "1vw",
    "&:hover": {
        backgroundColor: "green"
      },
} 

export const createButton: SxProps = {
    backgroundColor: "#D81E5B",
    color: "#EFF5F5",
    marginRight: "1vw",
    "&:hover": {
        backgroundColor: "green"
      },

}

export * as styles from './styles';