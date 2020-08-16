import React from 'react';
import { MainStyled } from '../Main/MainStyle';
import { Link } from 'react-router-dom';
import { GameSettings, IGameSettingsState } from '../Settings/Settings';

export class OfflineMode extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  onSettingsChange = (settings: IGameSettingsState) => {
    //console.log(settings);
  };

  render() {
    return (
      <MainStyled>
        <button>
          <Link to='/'>Back</Link>
        </button>
        <GameSettings onChange={this.onSettingsChange} />
        <button>Play</button>
      </MainStyled>
    );
  }
}
