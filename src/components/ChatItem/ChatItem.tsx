import { Tag } from "@blueprintjs/core";
import React from "react";
import { ChatData, ChatType } from "../Chat/Chat";
import "./ChatItem.scss";

type Props = {
  chatItem: ChatData;
};
type State = {};

class ChatItem extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <Tag
        className="ChatItem"
        style={{
          alignSelf:
            this.props.chatItem.type === ChatType.AI
              ? "flex-start"
              : "flex-end",
        }}
        minimal
        round
        intent={this.props.chatItem.type === ChatType.AI ? "none" : "primary"}
      >
        {this.props.chatItem.data}
      </Tag>
    );
  }
}

export default ChatItem;
