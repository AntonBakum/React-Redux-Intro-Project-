import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styles } from "../../styles";

interface Props {
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
        </div>
      );
}

export default UpdateCategoryColumnComponent;