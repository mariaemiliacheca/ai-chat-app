import React from 'react';
import './App.scss';
import { sendMessage } from './api';
import { Prompt } from './components';
import Chat, { ChatData, ChatType } from './components/Chat/Chat';

type Props = {
}
type State = {
  conversation: ChatData[]
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      conversation: []
    };
  }

  onSubmitHandler = (message: string) => {
    this.setState(
      {
        conversation: [...this.state.conversation, { data: message, type: ChatType.SELF}]
      },
      () => this.callApi(message))
  }

  callApi = async (message: string) => {
    const response = await sendMessage(message)
    const data = response.data
    const aiChatData: ChatData = {data: data.choices[0].text, type: ChatType.AI}
    this.setState({conversation: [...this.state.conversation, aiChatData]}, () => console.log(this.state.conversation))
    console.log(aiChatData)
  }

  render() {
    return (
      <div className="App">
        <Chat chatItems={this.state.conversation}/>
        <Prompt onSubmit={this.onSubmitHandler}/>
      </div>
    );
  }

}

export default App;
