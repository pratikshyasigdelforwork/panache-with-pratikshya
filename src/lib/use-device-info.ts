"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export type DeviceInfo = {
  ip: string;
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  theme: string;
  userAgent: string;
  screenWidth: number;
  screenHeight: number;
  timezone: string;
  language: string;
  timestamp: string;
};

export function useDeviceTracking() {
  const { theme } = useTheme();
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    const track = async () => {
      try {
        const geoRes = await fetch("https://ipapi.co/json/");
        const geo = await geoRes.json();

        const info: DeviceInfo = {
          ip: geo.ip || "unknown",
          city: geo.city || "unknown",
          region: geo.region || "unknown",
          country: geo.country_name || "unknown",
          latitude: geo.latitude || 0,
          longitude: geo.longitude || 0,
          theme: theme || "system",
          userAgent: navigator.userAgent,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          timestamp: new Date().toISOString(),
        };

        await fetch("/api/device", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(info),
        });
      } catch {
        // silently fail — tracking is non-critical
      }
    };

    track();
  }, [theme]);
}
