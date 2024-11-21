import React from "react";

interface ChangingProgressProviderProps {
  values: number[]; // or any other type the values array contains
  interval?: number; // optional because of defaultProps
  children: (value: number) => React.ReactNode; // function that returns React nodes
}

interface ChangingProgressProviderState {
  valuesIndex: number;
}

class ChangingProgressProvider extends React.Component<
  ChangingProgressProviderProps,
  ChangingProgressProviderState
> {
  static defaultProps = {
    interval: 1000,
  };

  state: ChangingProgressProviderState = {
    valuesIndex: 1,
  };

  componentDidMount() {
    const { interval, values } = this.props;

    if (values && values.length > 1) {
      setInterval(() => {
        this.setState((prevState) => ({
          valuesIndex: (prevState.valuesIndex + 1) % values.length,
        }));
      }, interval);
    }
  }

  render() {
    const { children, values } = this.props;
    const { valuesIndex } = this.state;

    return children(values[valuesIndex]);
  }
}

export default ChangingProgressProvider;
