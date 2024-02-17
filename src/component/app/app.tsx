import MainPageProps from '../pages/main-page.tsx';

type AppProps = {
  placeCount: number;
}

function App ({placeCount}: AppProps): JSX.Element {
  return (
    <MainPageProps placeCount = {placeCount} />
  );
}

export default App;
