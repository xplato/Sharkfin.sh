import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CustomEase);

export default function useAnimation<ElementType = HTMLDivElement>() {
  const element = useRef<ElementType>(null);

  const { contextSafe } = useGSAP({
    scope: element,
  });

  return {
    element,
    gsap,
    useGsap: useGSAP,
    contextSafe,
  };
}
