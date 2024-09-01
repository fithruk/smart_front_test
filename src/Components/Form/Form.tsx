import { Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSortData } from "../../Store/Reducers/formReducer";
import { filterBy } from "../../Store/Reducers/userReducer";
type props = {
  inputName: string;
};

export const TableInput = ({ inputName }: props) => {
  const label = `search by ${inputName}`;
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      key: event.target.name as "email" | "name" | "phone" | "username",
      value: event.target.value,
    };
    dispatch(setSortData(payload));
  };
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-required"
        name={inputName}
        label={label}
        onChange={handleChange}
      />
    </Box>
  );
};

export default TableInput;
