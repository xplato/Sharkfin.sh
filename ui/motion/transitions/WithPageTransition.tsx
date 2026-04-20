import type { PropsWithChildren } from "react";

import FullScreenCoverContentTransition from "./FullScreenCoverContentTransition";
import FullScreenCoverTransition from "./FullScreenCoverTransition";

export default function WithPageTransition({ children }: PropsWithChildren) {
  return (
    <FullScreenCoverContentTransition>
      {children}
    </FullScreenCoverContentTransition>
  );
}
