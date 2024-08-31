import { type ClassValue, clsx } from "clsx" // clsx is for conditionally applying CSS to HTML elements
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
