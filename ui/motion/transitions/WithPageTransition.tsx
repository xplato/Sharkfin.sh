import type { PropsWithChildren } from "react";

import FadeTransition from "./FadeTransition";
import FullScreenCoverContentTransition from "./FullScreenCoverContentTransition";
import FullScreenCoverTransition from "./FullScreenCoverTransition";

export default function WithPageTransition({ children }: PropsWithChildren) {
  return <FadeTransition>{children}</FadeTransition>;
}
