import { UIColor } from '../ColorsBackport';

export const getTextDecoration = (
  strikethrough?:
    | boolean
    | { color?: UIColor; pattern?: 'solid' | 'dot' | 'dash' },
  underline?: boolean | { color?: UIColor; pattern?: 'solid' | 'dot' | 'dash' },
  colorScheme?: 'light' | 'dark'
) => {
  const decoration = {};
  if (strikethrough) {
    decoration['textDecorationLine'] = 'line-through';
    if (typeof strikethrough === 'object') {
      decoration['textDecorationColor'] =
      // @ts-ignore
        UIColor[colorScheme][strikethrough.color] || strikethrough.color;
      decoration['textDecorationStyle'] = strikethrough.pattern;
    }
  }
  if (underline) {
    decoration['textDecorationLine'] = 'underline';
    if (typeof underline === 'object') {
      decoration['textDecorationColor'] =
      // @ts-ignore
        UIColor[colorScheme][underline.color] || underline.color;
      decoration['textDecorationStyle'] = underline.pattern;
    }
  }
  return decoration;
};
