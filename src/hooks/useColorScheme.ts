import { useContext } from 'react';
import { Modifiers } from '../utilities/ModifiersBackport';
import { EnvironmentProviderContext } from '../screens/environment/environment';

export const useColorScheme = (
  preferredColorScheme?: Modifiers['preferredColorScheme']
) => {
  const colorScheme =
    useContext(EnvironmentProviderContext)?.colorScheme || 'light';
  return preferredColorScheme || colorScheme;
};

