import { PusherProvider } from './PusherContext';

export const AppContext: React.VFC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <PusherProvider>{children}</PusherProvider>
    </>
  );
};
