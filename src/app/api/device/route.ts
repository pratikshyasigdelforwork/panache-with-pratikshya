import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const info = await req.json();

    const dir = path.join(process.cwd(), "data/device-logs");
    await mkdir(dir, { recursive: true });

    const filename = `device-${new Date().toISOString().split("T")[0]}.json`;
    const filepath = path.join(dir, filename);

    let logs: any[] = [];
    try {
      const { readFile } = await import("fs/promises");
      const existing = await readFile(filepath, "utf-8").catch(() => "[]");
      logs = JSON.parse(existing);
    } catch {
      logs = [];
    }

    logs.push({ ...info, loggedAt: new Date().toISOString() });
    await writeFile(filepath, JSON.stringify(logs, null, 2));

    console.log(`[DEVICE] ${info.ip} | ${info.city}, ${info.country} | ${info.theme} | ${info.userAgent?.slice(0, 60)}`);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[DEVICE] Failed to log:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
