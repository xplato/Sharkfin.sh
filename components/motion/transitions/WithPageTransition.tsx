import type { PropsWithChildren } from "react";

import FadeTransition from "./FadeTransition";

export default function WithPageTransition({ children }: PropsWithChildren) {
  return <FadeTransition>{children}</FadeTransition>;
}
