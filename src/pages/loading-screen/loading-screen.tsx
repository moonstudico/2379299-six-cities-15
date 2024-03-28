import { memo } from 'react';

function LoadingScreenRew(): JSX.Element {
  return (
    <p>Loading ...</p>
  );
}
const LoadingScreen = memo (LoadingScreenRew);
export default LoadingScreen;
