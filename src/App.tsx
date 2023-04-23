import './App.scss';

import Clock from './components/Clock';

const App = (): JSX.Element => {
  return (
    <>
      <Clock timeType="long" />
    </>
  );
};

export default App;
