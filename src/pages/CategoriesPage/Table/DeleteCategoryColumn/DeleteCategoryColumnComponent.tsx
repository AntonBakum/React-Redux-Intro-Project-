import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import DeleteCategoryContainer from "../../DeleteCategory/DeleteCategoryContainer";
import { styles } from "../../styles";

interface Props {
    id: number
    onToggleDeleteStatusClick: () => void
}

const DeleteCategoryColumnComponent = (props: Props) => {
    return (
        <div>
        <Button
          sx={styles.tableButtons}
          onClick={props.onToggleDeleteStatusClick}
        >
          <Delete />
        </Button>
        <DeleteCategoryContainer id={props.id} />
      </div>
    )
}

export default DeleteCategoryColumnComponent;