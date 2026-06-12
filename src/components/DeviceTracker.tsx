"use client";

import { useDeviceTracking } from "@/lib/use-device-info";

export default function DeviceTracker() {
  useDeviceTracking();
  return null;
}
