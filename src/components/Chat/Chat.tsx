import React from 'react';
import ChatItem from '../ChatItem/ChatItem';
import './Chat.scss';

export enum ChatType {
    SELF,
    AI
  }
  
export type ChatData = {
    data: string;
    type: ChatType
  }
  
  
type Props = {
    chatItems: ChatData[]
}
type State = {
}

class Chat extends React.Component<Props, State> {
    // constructor(props: Props) {
    //     super(props);
    //     this.state = {currentText: ''};
    //   }

    // onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({currentText: event.target.value})
    // }

    // onSubmitHandler = () => {
    //     this.props.onSubmit(this.state.currentText)
    //     this.setState({currentText: ''})
    // }

    // onKeyUpHandler = (event:KeyboardEvent<HTMLInputElement>) => {

    //     if (event.key === "Enter") {
    //         this.onSubmitHandler()
    //     }
    // }

    render(): React.ReactNode {
        return (
           <div className='Chat'>
               {this.props.chatItems.map((chatItemData, index) => <ChatItem key={index} chatItem={chatItemData}/>)}
           </div>
        )
    }
}

export default Chat;