import Pusher from 'pusher-js';
import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

type State = {
  pusher: Pusher;
};

type Value = {
  pusher: Pusher | null;
};

type Dispatch = {
  //
};

const ValueContext = createContext<Value>({
  pusher: null,
});

const DispatchContext = createContext<Dispatch>({
  //
});

export const PusherProvider: React.VFC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    if (state === null) {
      setState(
        prev =>
          prev ?? {
            pusher: new Pusher(process.env.PUSHER_APP_KEY || '', {
              cluster: process.env.PUSHER_APP_CLUSTER || '',
            }),
          },
      );
    }

    return () => {
      if (state !== null) {
        state.pusher.disconnect();
      }
    };
  }, [state]);

  return (
    <>
      <ValueContext.Provider
        value={{
          pusher: state?.pusher ?? null,
        }}
      >
        <DispatchContext.Provider value={{}}>{state === null ? 'preparing...' : children}</DispatchContext.Provider>
      </ValueContext.Provider>
    </>
  );
};

export const usePusherContext = (): { [K in keyof Value]: NonNullable<Value[K]> } & NonNullable<Dispatch> => {
  const context = {
    ...useContext(ValueContext),
    ...useContext(DispatchContext),
  };

  if (context.pusher) {
    return { ...context, pusher: context.pusher };
  } else {
    throw new Error('pusher uninitialized');
  }
};
