import React, { createRef } from 'react';
import ReactDOM from 'react';
import './App.css';

import { ComplexModalContents } from '../../dist/types/components/m-complex-modal/m-complex-modal';

type AppProps = {};
type AppState = {
  isModalOpen: boolean,
  isComplexModalOpen: boolean,
  isFixedModalOpen: boolean,
  isPanelOpen: boolean,
  contents: ComplexModalContents,
};

class App extends React.Component<AppProps, AppState> {
  private fixedModal: any;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      isComplexModalOpen: false,
      isFixedModalOpen: false,
      isPanelOpen: false,
      contents: {
        title: 'Complex modal',
        content: `
          React has some issues with Web Components.
          You have to resort to a workaround in order to make them work correctly
        `,
        footer: 'Click the button:',
      },
    };

    /**
     * Workaround for limitations on React:
     *
     * As React passes data to children through raw attributes, on string values can be passed down to children.
     * This is why the "classical" complex modal opens, but does not display any content.
     *
     * The way to fix it is to create a `ref` of the web component and set the property values directly through the element.
     * It's the same for React Events, that doesn't rely on DOM native events.
     */
    this.fixedModal = createRef();
    this.closeFixedModal = this.closeFixedModal.bind(this);
  }

  componentDidMount() {
    this.fixedModal.current.addEventListener('dismiss', this.closeFixedModal);
  }

  componentWillUnmount() {
    this.fixedModal.current.addEventListener('dismiss', this.closeFixedModal);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  openComplexModal() {
    this.setState({ isComplexModalOpen: true });
  }

  openFixedModal() {
    this.setState({ isFixedModalOpen: true });
    this.fixedModal.current.contents = this.state.contents;
  }

  openPanel() {
    this.setState({ isPanelOpen: true });
  }

  closeFixedModal() {
    this.setState({ isFixedModalOpen: false });
    this.fixedModal.current.contents = {};
  }

  render() {
    return (
      <main>
        <h1>A nice React app</h1>
        <m-button onClick={ () => this.openModal() }>Open modal</m-button>
        <m-button onClick={ () => this.openComplexModal() }>Open complex modal</m-button>
        <m-button onClick={ () => this.openFixedModal() }>Open fixed complex modal</m-button>
        <m-button onClick={ () => this.openPanel() }>Open panel</m-button>

        <m-modal open={ this.state.isModalOpen } ></m-modal>
        <m-complex-modal open={ this.state.isComplexModalOpen } contents={ this.state.contents }></m-complex-modal>
        <m-complex-modal ref={ this.fixedModal } open={ this.state.isFixedModalOpen } contents={ this.state.contents }></m-complex-modal>
        <m-panel open={ this.state.isPanelOpen } ></m-panel>
      </main>
    );
  }
}

export default App;
