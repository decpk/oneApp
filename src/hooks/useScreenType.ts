import { useState, useEffect } from "react";
import { debounce } from "lodash";

export enum SCREEN_TYPE {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}

const screenSize: Record<SCREEN_TYPE, number> = {
  [SCREEN_TYPE.MOBILE]: 0,
  [SCREEN_TYPE.TABLET]: 769,
  [SCREEN_TYPE.DESKTOP]: 1201,
};

export interface IScreenTypeProperties {
  windowInnerWidth: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const getScreenTypeObj = (): IScreenTypeProperties => {
  const windowInnerWidth = window.innerWidth;
  const isMobile =
    windowInnerWidth >= screenSize.MOBILE &&
    windowInnerWidth < screenSize.TABLET;
  const isTablet =
    windowInnerWidth >= screenSize.TABLET &&
    windowInnerWidth < screenSize.DESKTOP;
  const isDesktop = windowInnerWidth >= screenSize.DESKTOP;

  return {
    windowInnerWidth: windowInnerWidth,
    isMobile,
    isTablet,
    isDesktop,
  };
};

function useScreenType(): IScreenTypeProperties {
  const [properties, setProperties] = useState<IScreenTypeProperties>(() =>
    getScreenTypeObj()
  );
  const debouncedResizedFunction = debounce(
    () => setProperties(getScreenTypeObj()),
    300
  );

  useEffect(() => {
    window.addEventListener("resize", debouncedResizedFunction);
    return () => {
      window.removeEventListener("resize", debouncedResizedFunction);
    };
  }, [debouncedResizedFunction]);

  return properties;
}

export default useScreenType;
