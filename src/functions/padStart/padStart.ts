type IPadStartConfig = {
  pads?: number;
  character?: string;
};

/**
 * The padStart() method pads the current string with another string
 * (multiple times, if needed) until the resulting string
 * reaches the given length.
 * The padding is applied from the start of the current string.
 * @param payload 
 * @param config 
 * @returns 
 */
const padStart = (
  payload: string | number,
  config?: IPadStartConfig
): string => {
  return String(payload).padStart(config?.pads || 3, config?.character || '0');
};

export default padStart;
