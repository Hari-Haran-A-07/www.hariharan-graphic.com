import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProjectNumber(num: string | number): string {
  const parsed = typeof num === 'number' ? num : parseInt(num, 10);
  if (isNaN(parsed)) return String(num);
  return parsed < 10 ? `00${parsed}` : parsed < 100 ? `0${parsed}` : `${parsed}`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
