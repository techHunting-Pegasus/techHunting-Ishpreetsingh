import type { NextConfig } from "next";

const nextConfig: NextConfig & Record<string, any> = {
   // keep custom dev origin if you rely on it locally — typed as `any` to avoid
   // Next's strict config type rejecting non-standard keys
   allowedDevOrigins: ["192.168.29.104"],
};

export default nextConfig;
