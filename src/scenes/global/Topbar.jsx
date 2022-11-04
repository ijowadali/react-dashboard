import {Box, IconButton, InputBase, useTheme} from "@mui/material";
import {ColorModeContext, tokens} from "../../them";
import {useContext} from "react";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const  colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
      <Box display="flex" justifyContent={"space-between"} p={2}>
        <Box display={"flex"} backgroundColor={colors.primary[400]} borderRadius={"3px"}>
          <InputBase sx={{ ml:2,flex:1}} placeholder={"Search"}/>
          <IconButton type={"button"} sx={{ p: 1}}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
  );
};
export default Topbar;
