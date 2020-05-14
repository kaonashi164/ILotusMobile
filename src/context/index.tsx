import React, {useReducer} from 'react';

const CTX = React.createContext({});

export {CTX};

export const Context = (props: any) => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        default:
          return prevState;
      }
    },
    {
      isAuth: false,
    },
  );

  return (
    <CTX.Provider value={{state, dispatch}}>{props.children}</CTX.Provider>
  );
};
