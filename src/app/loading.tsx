import { LoadingScreen } from "@/components/LoadingScreen";

export default function Loading() {
  return <LoadingScreen delayed delayMs={320} autoDismissMs={1400} />;
}
