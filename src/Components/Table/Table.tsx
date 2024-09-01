import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../hooks";
import TableInput from "../Form/Form";

import { filterBy, getUsers, setUsers } from "../../Store/Reducers/userReducer";

const UserTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, status, error, filteredUsers } = useAppSelector(
    (state) => state.users
  );
  const form = useAppSelector((state) => state.form);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputNames, setInputNames] = useState<string[]>([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
    if (status === "loading") setLoading(true);
    if (status === "succeeded") {
      dispatch(setUsers(users));
      setLoading(false);
      setInputNames(
        Object.keys({
          name: users[0].name,
          username: users[0].username,
          email: users[0].email,
          phone: users[0].phone,
        })
      );
    }
    if (status === "failed") return alert(error);
  }, [status, dispatch, error]);

  useEffect(() => {
    dispatch(filterBy(form));
  }, [form]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden", padding: 2, height: "100vh" }}
    >
      <Typography variant="h6" gutterBottom>
        User Management
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {inputNames.map((inputName, ind) => (
                <TableCell key={ind} align="center">
                  <TableInput inputName={inputName} />
                </TableCell>
              ))}
            </TableRow>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserTable;
