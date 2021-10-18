import { useTheme } from "next-themes";
import { A } from '@/components/Typography';

export const Toggle = () => {
  const { theme, themes, setTheme } = useTheme();
  const [mode] = themes.filter(t => t !== theme);
  const toggleMode = () => setTheme(mode);

  return <A href="#" onClick={toggleMode}> {mode}</A>;
};
