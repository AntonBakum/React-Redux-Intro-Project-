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
    marginRight: "1vw"
}

export const deleteButton: SxProps = {
    backgroundColor: "#DC3535",
    color: "#EFF5F5",
    marginRight: "1vw"
}

export const createButton: SxProps = {
    backgroundColor: "#285430",
    color: "#EFF5F5",
    marginRight: "1vw"

}

export const  updateButton: SxProps = {
    backgroundColor: "#3B3486",
    color: "#EFF5F5",
    marginRight: "1vw"
}

export * as styles from './styles';