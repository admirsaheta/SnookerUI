import { UIColor } from '../utilities/ColorsBackport';
import { useColorScheme } from './useColorScheme';

/**
 * A hook that returns the appropriate color palette based on the color scheme.
 */
export const useColor = (preferredColorScheme?: 'light' | 'dark') => {
  const colorScheme = useColorScheme(preferredColorScheme);
  return UIColor[colorScheme];
};
