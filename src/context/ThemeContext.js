import { createContext, useContext } from 'react';
import { theme } from '../style/theme';

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;