import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import { LangContext } from "@/contexts/LangContext";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext)
  return(
    <p className="text-center" style={{ color: theme.fgColor }}>
      {theme.name === 'light'
      ? lang.detail.lightActivated
      : lang.detail.darkActivated}

    </p>
  );
};
