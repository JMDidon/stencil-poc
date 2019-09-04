import React from 'react';
import ReactDOM from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {};
type AppState = {
  isModalOpen: boolean,
  isPanelOpen: boolean,
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isModalOpen: false,
      isPanelOpen: false,
    };
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  openPanel() {
    this.setState({ isPanelOpen: true });
  }

  render() {
    return (
      <main>
        <h1>A nice React app</h1>
        <m-button onClick={ () => this.openModal() }>Open modal</m-button>
        <m-button onClick={ () => this.openPanel() }>Open panel</m-button>
        <m-modal open={ this.state.isModalOpen } ></m-modal>
        <m-panel open={ this.state.isPanelOpen } ></m-panel>
      </main>
    );
  }
}

export default App;
