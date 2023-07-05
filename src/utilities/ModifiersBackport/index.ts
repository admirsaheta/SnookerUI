import { StyleProp, ViewStyle } from 'react-native';
import type { UIColor } from '../ColorsBackport';
import { Border } from '../UIBorder';
import { Frame, ShapeFrame } from '../UIFrame';
import { Padding } from '../PaddingBackport';
import { Shadow } from '../ShadowBackport';
import { Rotation } from '../TransformBackports';
import { UIAlert } from '../UIAlert';
import { Fonts, FontWeights } from '../FontBackport';
import { ReactNode } from 'react';

export type Modifiers = {
  alert?: UIAlert;
  backgroundColor?: UIColor;
  padding?: Padding;
  cornerRadius?: number;
  rotationEffect?: Rotation;
  scaleEffect?: number;
  shadow?: Shadow;
  border?: Border;
  opacity?: number;
  frame?: Frame;
  zIndex?: number;
  preferredColorScheme?: 'light' | 'dark';
  style?: StyleProp<ViewStyle>;
  onAppear?: () => void;
  onDisappear?: () => void;
};

export type TextModifiers = {
  font?: keyof typeof Fonts;
  fontWeight?: keyof typeof FontWeights;
  fontSize?: number;
  foregroundColor?: UIColor;
  customFont?: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?:
    | boolean
    | { color?: UIColor; pattern?: 'solid' | 'dot' | 'dash' };
  underline?: boolean | { color?: UIColor; pattern?: 'solid' | 'dot' | 'dash' };
};

export type ShapeModifiers = Omit<Modifiers, 'backgroundColor' | 'frame'> & {
  fill?: UIColor;
  frame: ShapeFrame;
};

export type WithChildren<T> = T & {
  children?: ReactNode;
};
