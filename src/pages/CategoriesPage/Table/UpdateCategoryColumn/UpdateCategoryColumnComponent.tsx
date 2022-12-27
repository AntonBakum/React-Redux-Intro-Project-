import { Edit } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { styles } from "../../styles";

interface Props {
    onToggleUpdateStatusClick: () => void
}

const UpdateCategoryColumnComponent = (props: Props) => {
    return (
        <Box>
          <Button
            sx={styles.tableButtons}
            onClick={props.onToggleUpdateStatusClick}
          >
            <Edit />
          </Button>
        </Box>
      );
}

export default UpdateCategoryColumnComponent;