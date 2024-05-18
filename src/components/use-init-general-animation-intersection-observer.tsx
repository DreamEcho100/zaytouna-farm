"use client";
import { generalAnimationIntersectionObserverCB } from "~/utils";
import { useInitGeneralAnimationIntersectionObserver } from "~/utils/hooks";

export const UseInitGeneralAnimationIntersectionObserver = (props: {
  callback?: IntersectionObserverCallback;
  options?: IntersectionObserverInit | undefined;
}) => {
  useInitGeneralAnimationIntersectionObserver(
    props.callback ?? generalAnimationIntersectionObserverCB,
    props.options,
  );

  return null;
};
