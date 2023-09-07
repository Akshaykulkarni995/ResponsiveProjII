import React from "react";
import {
  AppBar as MUIAppBar,
  Box,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { AccountCircle, Menu, Settings } from "@mui/icons-material";
import SearchInput from "../search/search";

import brandLogo from "../../assets/images/Clinisys_logo_bk_rgb.svg";

const AppBar = styled(MUIAppBar)`
  background-color: ${({ theme }) => theme.palette.common.black};
  height: 4rem;
`;

const BrandDetails = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;
const BrandLogo = styled(Box)`
  background-color: #ffce00;
  height: 100%;
  max-height: 4rem;
  & img {
    height: 4rem;
  }
`;
const BoxWrap = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;
const FeatureBox = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 23.25rem;
  padding-right: ${({ theme }) => theme.spacing(2.5)};
`;
const MenuButton = styled(Box)`
  align-items: center;
  display: flex;
  margin-right: ${({ theme }) => theme.spacing(2)};
  & svg {
    font-size: 2rem;
  }
`;
const ProductName = styled(Box)`
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(0, 2.5)};
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const SearchWrap = styled(Box)`
  min-width: 15.5rem;
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
const SettingsButton = styled(Box)`
  align-items: center;
  display: flex;
`;
const ToolBar = styled(Toolbar)`
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;
const UserProfile = styled(Box)`
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing(0, 0.5)};
  & svg {
    font-size: 2rem;
  }
`;
const ApplicationHeader = () => {
  return (
    <AppBar
      id="app-header"
      aria-describedby="app-header"
      position="static"
      elevation={0}
    >
      <ToolBar disableGutters variant="dense">
        <MenuButton>
          <Tooltip title="Menu">
            <Menu />
          </Tooltip>
        </MenuButton>

        <BoxWrap>
          <BrandDetails>
            <BrandLogo>
              <img src={brandLogo} alt="Clinisys" />
            </BrandLogo>

            <ProductName display={{ xs: "none", md: "flex" }}>
              <Typography variant="h6">Specimen Processing</Typography>
            </ProductName>
          </BrandDetails>
          <SearchWrap display={{ xs: "none", md: "flex" }}>
            <SearchInput />
          </SearchWrap>
          <FeatureBox>
            <SettingsButton>
              <Tooltip title="Settings">
                <Settings />
              </Tooltip>
            </SettingsButton>
          </FeatureBox>
        </BoxWrap>
        <UserProfile>
          <Tooltip title="User Profile">
            <AccountCircle />
          </Tooltip>
        </UserProfile>
      </ToolBar>
    </AppBar>
  );
};

export default ApplicationHeader;
