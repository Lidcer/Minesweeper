import React from 'react';
import { MainStyled } from '../Main/MainStyle';


export class OfflineMode extends React.Component<{},{}> {


  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }
  componentWillUnmount() {
 
  }


  render() {
    return (<MainStyled>test</MainStyled>);
  }
}