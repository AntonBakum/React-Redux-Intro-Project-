import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { styles } from "../../styles";
import UpdateCategoryContainer from "../../UpdateCategory/UpdateCategoryContainer";

interface Props {
    category: GridRenderCellParams
    onToggleUpdateStatusClick: () => void
}

const UpdateCategoryColumnComponent = (props: Props) => {
    return (
        <div>
          <Button
            sx={styles.tableButtons}
            onClick={props.onToggleUpdateStatusClick}
          >
            <Edit />
          </Button>
          <UpdateCategoryContainer
            id={props.category.row.id}
            name={props.category.row.name}
            description={props.category.row.description}
          />
        </div>
      );
}

export default UpdateCategoryColumnComponent;