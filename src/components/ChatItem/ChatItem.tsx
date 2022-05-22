import { Tag } from '@blueprintjs/core';
import React from 'react';
import { ChatData, ChatType } from '../Chat/Chat';

type Props = {
    chatItem: ChatData
}
type State = {

}

class ChatItem extends React.Component<Props, State> {
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
        
        // return <input type="text" placeholder='Typ your text here~å'/>
        return (
           <Tag className='ChatItem' style={{
               alignSelf: this.props.chatItem.type === ChatType.AI ? 'flex-start' : 'flex-end'
           }} minimal round intent={this.props.chatItem.type === ChatType.AI ? 'none' : 'primary'} >
               {this.props.chatItem.data}
           </Tag>
        )
    }
}

export default ChatItem;