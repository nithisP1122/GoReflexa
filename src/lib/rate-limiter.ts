/**
 * Lightweight sliding window rate limiter for waitlist submissions
 * Defaults to max 5 requests per 10 minutes per IP
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipMap = new Map<string, RateLimitRecord>();

// Clean up old entries periodically
const CLEANUP_INTERVAL_MS = 15 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  const windowStart = now - 10 * 60 * 1000;
  for (const [ip, record] of ipMap.entries()) {
    record.timestamps = record.timestamps.filter((ts) => ts > windowStart);
    if (record.timestamps.length === 0) {
      ipMap.delete(ip);
    }
  }
}

export function isRateLimited(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
): { limited: boolean; remaining: number; resetMs: number } {
  cleanup();

  const now = Date.now();
  const windowStart = now - windowMs;

  let record = ipMap.get(ip);
  if (!record) {
    record = { timestamps: [] };
    ipMap.set(ip, record);
  }

  // Filter timestamps within window
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0];
    const resetMs = Math.max(0, oldest + windowMs - now);
    return { limited: true, remaining: 0, resetMs };
  }

  record.timestamps.push(now);
  return {
    limited: false,
    remaining: limit - record.timestamps.length,
    resetMs: windowMs,
  };
}

