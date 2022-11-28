import { signal } from "@preact/signals";

export default function createAppState() {
  const phoneNumber = signal('');

  return { phoneNumber }
}