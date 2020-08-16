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
      <div className='container-fluid'>
        <MainStyled>

					<GameSettings onChange={this.onSettingsChange} />
					<br/>

          <div className='row'>
            <button className='btn btn-primary btn-lg btn-block col'>Play</button>
            <div className='w-100'></div>
            <Link to='/' className='col'>
              <button className='btn btn-primary btn-lg btn-block'>Back</button>
            </Link>
          </div>
        </MainStyled>
      </div>
    );
  }
}
