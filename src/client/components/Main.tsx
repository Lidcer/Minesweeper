import React from 'react';
import io from 'socket.io-client';
import { MainStyled, MinButton, MainTitle } from './MainStyle';

interface IMainState {
  ready: boolean;
}

export class Main extends React.Component<{}, IMainState> {
  private socket: SocketIOClient.Socket;

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    this.socket = io(origin);
    this.socket.on('connect', () => {
      this.setState({ ready: true });
    });
  }
  componentWillUnmount() {
    this.socket.disconnect();
  }

  get webSocketInfo() {
    return this.state.ready ? `Connected websocket id: ${this.socket.id}` : 'No connected';
  }

  render() {
    return (
      <MainStyled>
        <MainTitle>Minesweeper (LOGO)</MainTitle>
        <MinButton>Start</MinButton>
        <br />
        <MinButton>Options</MinButton>
      </MainStyled>
    );
  }
}
