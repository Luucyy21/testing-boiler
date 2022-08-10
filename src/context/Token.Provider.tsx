import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type State = {
  token: string | null;
};

export interface TokenContextType extends State {
  setToken: (token: string | null) => void;
}

const initialState: State = {
  token: null,
};

enum actions {
  SET_TOKEN = 'SET_TOKEN',
}

type ActionType = {
  type: actions.SET_TOKEN;
  value: {
    token: string | null;
  };
};

function reducer(state: State, action: ActionType) {
  switch (action.type) {
    case actions.SET_TOKEN:
      return {...state, ...action.value};
    default:
      return state;
  }
}

const TokenContext = createContext<TokenContextType>({
  ...initialState,
  setToken: () => {},
});

export const useTokenContext = () => useContext(TokenContext);

export default function TokenProvider({children}: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return {
      ...state,
      setToken: (token: string | null) => {
        dispatch({type: actions.SET_TOKEN, value: {token}});
      },
    };
  }, [state]);

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}
