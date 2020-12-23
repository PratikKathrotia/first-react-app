import { Component } from 'react';

const asyncComponent = (config) => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      config.import().then((file) => {
        this.setState({ component: file[config.name] });
      });
    }

    render() {
      const Comp = this.state.component;
      return Comp ? <Comp {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
