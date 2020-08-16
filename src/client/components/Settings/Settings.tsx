import React from 'react';

type GameDifficult = 'easy' | 'medium' | 'hard' | 'custom';

interface IGameSettingsProps {
  onChange: (settings: IGameSettingsState) => void;
}

export interface IGameSettingsState {
  difficulty: GameDifficult;
  gameOptions: IGameSettings;
}

export interface IGameSettings {
  fieldWidth: number;
  fieldHeight: number;
  bombsCount: number;
}

export class GameSettings extends React.Component<IGameSettingsProps, IGameSettingsState> {
  public static readonly EASY: IGameSettings = {
    fieldHeight: 9,
    fieldWidth: 9,
    bombsCount: 10,
  };

  public static readonly MEDIUM: IGameSettings = {
    fieldHeight: 16,
    fieldWidth: 16,
    bombsCount: 40,
  };

  public static readonly HARD: IGameSettings = {
    fieldHeight: 16,
    fieldWidth: 30,
    bombsCount: 99,
  };

  constructor(props: IGameSettingsProps) {
    super(props);
    this.state = {
      difficulty: 'easy',
      gameOptions: { ...GameSettings.EASY },
    };
  }

  changeSettings = (difficulty: GameDifficult) => {
    let gameOptions = this.state.gameOptions;
    switch (difficulty) {
      case 'easy':
        gameOptions = { ...GameSettings.EASY };
        break;
      case 'medium':
        gameOptions = { ...GameSettings.MEDIUM };
        break;
      case 'hard':
        gameOptions = { ...GameSettings.HARD };
        break;
      default:
        break;
    }
    this.setState({ difficulty, gameOptions });
    this.emitSettings();
  };

  emitSettings() {
    this.props.onChange(this.state);
  }

  onInputChange(ev: React.ChangeEvent<HTMLInputElement>, type: keyof IGameSettings) {
    const state = { ...this.state };
    const number = parseInt(ev.target.value);
    state.gameOptions[type] = number;
    this.setState(state);
    this.emitSettings();
  }

  get changeOptions() {
    if (this.state.difficulty === 'custom') {
      return (
        <div className='row'>
          <div className='col'>
            <span>Filed Width</span>
            <input
              type='text'
              value={this.state.gameOptions.fieldWidth}
              onChange={e => {
                this.onInputChange(e, 'fieldWidth');
              }}
            />
          </div>
					<div className='w-100'></div>
          <div className='col'>
            <span>Filed Height</span>
            <input
              type='text'
              value={this.state.gameOptions.fieldHeight}
              onChange={e => {
                this.onInputChange(e, 'fieldHeight');
              }}
            />
          </div>
          <div className='col'>
					<div className='w-100'></div>
            <span>Bombs count</span>
            <input
              type='text'
              value={this.state.gameOptions.bombsCount}
              onChange={e => {
                this.onInputChange(e, 'bombsCount');
              }}
            />
          </div>
        </div>
      );
    }

    return (
      <div className='row'>
        <div className='col'>
          <span>Filed Width</span>
          <input type='text' value={this.state.gameOptions.fieldWidth} disabled />
        </div>
        <div className='col'>
          <span>Filed Height</span>
          <input type='text' value={this.state.gameOptions.fieldHeight} disabled />
        </div>
        <div className='col'>
          <span>Bombs count</span>
          <input type='text' value={this.state.gameOptions.bombsCount} disabled />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeSettings('easy')} disabled={this.state.difficulty === 'easy'}>
          Easy
        </button>
        <button onClick={() => this.changeSettings('medium')} disabled={this.state.difficulty === 'medium'}>
          Medium
        </button>
        <button onClick={() => this.changeSettings('hard')} disabled={this.state.difficulty === 'hard'}>
          Hard
        </button>
        <button onClick={() => this.changeSettings('custom')} disabled={this.state.difficulty === 'custom'}>
          Custom
        </button>

        {this.changeOptions}
      </div>
    );
  }
}
