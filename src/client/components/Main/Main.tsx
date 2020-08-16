import React from 'react';
import io from 'socket.io-client';
import { sample } from 'loadsh';
import { Link } from 'react-router-dom';
import { MainStyled, MinButton, MainTitle, MinNumber, MinBreak } from './MainStyle';
import { PATH_OFFLINE_MODE } from '../../utils/pathnames';

interface IMainState {
  ready: boolean;
  number: '0' | '1';
}

export class Main extends React.Component<{}, IMainState> {
  private socket: SocketIOClient.Socket;
  private interval: number |undefined  

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      number: '0'
    };
  }

  componentDidMount() {
    this.socket = io(origin);
    this.socket.on('connect', () => {
      this.setState({ ready: true });
    });
    this.interval = setInterval(this.randomNumber, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.socket.disconnect();
  }

  randomNumber = () => { 
    const options = ['0','1'];
    const number = sample(options);
    this.setState({number})
  }

  get webSocketInfo() {
    return this.state.ready ? `Connected websocket id: ${this.socket.id}` : 'No connected';
  }

  render() {
    return (

      <MainStyled>
				<MinNumber>{this.state.number}</MinNumber>
        <MainTitle>Minesweeper (LOGO)</MainTitle>
				<MinButton className='btn btn-primary btn-lg btn-block'>
          <Link to={PATH_OFFLINE_MODE}>Start</Link></MinButton>
        <MinButton className='btn btn-primary btn-lg btn-block'>Options</MinButton>
      </MainStyled>
    );
  }
}