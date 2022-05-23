import React from "react";
import ChatItem from "../ChatItem/ChatItem";
import "./Chat.scss";

export enum ChatType {
  SELF,
  AI,
}

export type ChatData = {
  data: string;
  type: ChatType;
};

type Props = {
  chatItems: ChatData[];
};
type State = {};

class Chat extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <div className="Chat">
        {this.props.chatItems.map((chatItemData, index) => (
          <ChatItem key={index} chatItem={chatItemData} />
        ))}
      </div>
    );
  }
}

export default Chat;
