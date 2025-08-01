import React, { Fragment, useContext } from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import LoginDialog from "./Accounts/LoginDialog";
import ChatDialog from "./chat/chatdialog";
import ContestMain from "./Contest/ContestMain";
import Community from "./Community/Community";
import EditProfile from "./EditProfile/editProfile";
import Profile from "./Profile/profile";
import Problemset from "./Problemset/Problemset";
import RiHeader from "./Header/Header";   // ← add this

import { AccountContext } from "./constants/contexts/AccountProvider";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: black;
  }
`;

const LoginHeader = styled(AppBar)({
  height: "220px",
  boxShadow: "none",
  backgroundColor: "black",
});

const ChatHeader = styled(AppBar)({
  height: "125px",
  boxShadow: "none",
  backgroundColor: "black",
});

const Component = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const Content = styled(Box)({
  flexGrow: 1,
  overflowY: "auto",
});

function Messenger() {
  const { account, page } = useContext(AccountContext);

  function renderComponent() {
    switch (page) {
      case 1:
        return <Profile />;
      case 2:
        return <ContestMain />;
      case 3:
        return <Community />;
      case 4:
        return <ChatDialog />;
      case 5:
        return <EditProfile />;
      case 6:
        return <Problemset />;
      default:
        return <ContestMain />;
    }
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Component>
        {account ? (
          <Fragment>
            {page === 4 ? (
              <ChatHeader>
                <Toolbar>
                  <ChatDialog />
                </Toolbar>
              </ChatHeader>
            ) : (
              <>
+               <RiHeader />           {/* ← header always here */}
                <Content>
                  {renderComponent()}
                </Content>
              </>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <LoginHeader>
              <Toolbar>
                <LoginDialog />
              </Toolbar>
            </LoginHeader>
            <Content />
          </Fragment>
        )}
      </Component>
    </Fragment>
  );
}

export default Messenger;