import { Button, InputGroup, Navbar } from "@blueprintjs/core";
import React, { ChangeEvent, KeyboardEvent } from "react";
import "./Prompt.scss";

type Props = {
  onSubmit: (message: string) => void;
};
type State = {
  currentText: string;
};

class Prompt extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentText: "" };
  }

  onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentText: event.target.value });
  };

  onSubmitHandler = () => {
    this.props.onSubmit(this.state.currentText);
    this.setState({ currentText: "" });
  };

  onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.onSubmitHandler();
    }
  };

  render(): React.ReactNode {
    return (
      <InputGroup
        className="Prompt"
        onChange={this.onChangeHandler}
        onKeyUp={this.onKeyUpHandler}
        value={this.state.currentText}
        placeholder="Type something to the AI..."
        rightElement={
          <Button icon="arrow-right" minimal onClick={this.onSubmitHandler} />
        }
      />
    );
  }
}

export default Prompt;
