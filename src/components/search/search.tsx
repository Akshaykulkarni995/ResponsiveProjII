import * as React from "react";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  paperClasses,
  styled,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBox = styled(Box)`
  align-items: center;
  display: flex;
  max-width: 25rem;
  width: 100%;
  .${paperClasses.root} {
    width: 100%;
  }
`;
const ButtonSearch = styled(IconButton)`
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing(1)};
`;
const InputField = styled(InputBase)`
  margin-left: ${({ theme }) => theme.spacing(1)};
  width: calc(100% - 3.5rem);
`;
const SearchInput = () => {
  return (
    <SearchBox>
      <Paper component="form">
        <ButtonSearch type="button" aria-label="search">
          <Search />
        </ButtonSearch>
        <InputField
          placeholder="Search / Scan Specimen"
          inputProps={{ "aria-label": "Search / Scan Specimen" }}
        />
      </Paper>
    </SearchBox>
  );
};

export default SearchInput;
