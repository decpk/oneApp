import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { IRootState, IAppDispatch } from "../redux/store";
import useScreenType, {
  SCREEN_TYPE,
  IScreenTypeProperties,
} from "./useScreenType";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => IAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export type { IScreenTypeProperties };
export { useScreenType, SCREEN_TYPE };
