import type { PropsWithChildren } from "react";

import FullScreenCoverTransition from "./FullScreenCoverTransition";

export default function WithPageTransition({ children }: PropsWithChildren) {
  return <FullScreenCoverTransition>{children}</FullScreenCoverTransition>;
}
