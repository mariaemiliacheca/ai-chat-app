import React from "react";
import "./App.scss";
import { sendMessage } from "./api";
import { Prompt } from "./components";
import Chat, { ChatData, ChatType } from "./components/Chat/Chat";
import {
  Button,
  Menu,
  MenuItem,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

type Props = {};
type State = {
  conversation: ChatData[];
  isDarkModeOn: boolean;
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      conversation: [],
      isDarkModeOn: false,
    };
  }

  onSubmitHandler = (message: string) => {
    this.setState(
      {
        conversation: [
          ...this.state.conversation,
          { data: message, type: ChatType.SELF },
        ],
      },
      () => this.callApi(message)
    );
  };

  callApi = async (message: string) => {
    const response = await sendMessage(message);
    const data = response.data;
    const aiChatData: ChatData = {
      data: data.choices[0].text,
      type: ChatType.AI,
    };
    this.setState(
      { conversation: [...this.state.conversation, aiChatData] },
      () => console.log(this.state.conversation)
    );
    console.log(aiChatData);
  };

  render() {
    return (
      <div className={"App" + (this.state.isDarkModeOn ? " bp4-dark" : "")}>
        <Navbar fixedToTop>
          <NavbarGroup>
            <NavbarHeading>Maria Emilia's Chat App</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align="right">
            <NavbarDivider />
            <Popover2
              minimal
              content={
                <Menu>
                  <MenuItem
                    text="Clear chat"
                    onClick={() => this.setState({ conversation: [] })}
                  />
                  <MenuItem
                    text="Toggle Dark Mode"
                    onClick={() =>
                      this.setState({ isDarkModeOn: !this.state.isDarkModeOn })
                    }
                  />
                </Menu>
              }
              position={Position.BOTTOM_RIGHT}
            >
              <Button rightIcon="caret-down" text="Options" minimal />
            </Popover2>
          </NavbarGroup>
        </Navbar>
        <Chat chatItems={this.state.conversation} />
        <Prompt onSubmit={this.onSubmitHandler} />
      </div>
    );
  }
}

export default App;
