const RGB_PATTERN = /^\s*rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*$/i
const RGB_PCT_PATTERN = /^\s*rgb\(\s*(\d{1,3}|\d{1,2}\.\d+)%\s*,\s*(\d{1,3}|\d{1,2}\.\d+)%\s*,\s*(\d{1,3}|\d{1,2}\.\d+)%\s*\)\s*$/i


export const RGB_REGEX = {
    short: RGB_PATTERN,
    long: RGB_PCT_PATTERN,
  }

const RGBA_PATTERN = /^\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0\.\d+)\s*\)\s*$/i
const RGBA_PCT_PATTERN = /^\s*rgba\(\s*(\d{1,3}|\d{1,2}\.\d+)%\s*,\s*(\d{1,3}|\d{1,2}\.\d+)%\s*,\s*(\d{1,3}|\d{1,2}\.\d+)%\s*,\s*(0|1|0\.\d+)\s*\)\s*$/i

export const RGBA_REGEX = {
    short: RGBA_PATTERN,
    long: RGBA_PCT_PATTERN,
  }

export const HEX_PATTERN = /#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})/i
export const HEX3_PATTERN = /#([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])/i
export const HSL_PATTERN = /^\s*hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)\s*$/i
export const HSLA_PATTERN = /^\s*hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0|1|0\.\d+)\s*\)\s*$/i
