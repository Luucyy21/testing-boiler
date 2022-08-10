import {useTokenContext} from '../context/Token.Provider';

export default function useInitialRouteName() {
  const {token} = useTokenContext();
  return token ? 'Home' : 'Welcome';
}
