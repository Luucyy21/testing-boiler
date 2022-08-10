import {
  StyleProp,
  TextStyle,
  TextProps,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacityProps,
  Animated,
  RegisteredStyle,
  ModalProps,
  TextInputProps,
} from 'react-native';
import {Route, NavigationState, PartialState} from '@react-navigation/native';
import {ReactNode} from 'react';
import {BottomSheetProps} from '@gorhom/bottom-sheet';
import {SharedValue} from 'react-native-reanimated';

export declare namespace Types {
  export type ILanguage = 'en' | 'km' | 'zh';

  export type IFont =
    | 'solid'
    | 'regular'
    | 'light'
    | 'brand'
    | 'round'
    | 'sharp'
    | 'outline';

  export interface IRNIcon {
    font?: IFont;
    icon?: string;
    color?: string;
    style?: StyleProp<TextStyle>;
    iconType?: 'material' | 'fontAweasome';
    iosIcon?: string; //use with materila icon
    androidIcon?: string; //use with materila icon
  }

  export interface ITextBase extends TextProps {
    bold?: boolean;
    language?: ILanguage;
    children?: React.ReactNode | string;
  }
  export interface IText extends ITextBase {
    textStyle?: StyleProp<TextStyle>;
    titleStyle?: StyleProp<TextStyle>;
    valueStyle?: StyleProp<TextStyle>;
    title?: string;
    value?: string;
    titleBold?: boolean;
    valueBold?: boolean;
    font?: IFont;
    leftIcon?: string;
    rightIcon?: string;
    iconStyle?: StyleProp<TextStyle>;
    leftIconStyle?: StyleProp<TextStyle>;
    rightIconStyle?: StyleProp<TextStyle>;
  }

  export type IRoute = Route<string> & {
    state?: NavigationState | PartialState<NavigationState>;
  };

  export interface IButtonProps {
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    title?: string;
    bold?: boolean;
    color?: string;
    count?: number;
    font?: Types.IFont;
    icon?: string;
    leftIcon?: string;
    rightIcon?: string;
    iconStyle?: StyleProp<TextStyle>;
    leftIconStyle?: StyleProp<TextStyle>;
    rightIconStyle?: StyleProp<TextStyle>;
    leftIconType?: 'material' | 'fontAweasome';
    rightIconType?: 'material' | 'fontAweasome';

    imageStyle?: StyleProp<ImageStyle>;
    leftImageStyle?: StyleProp<ImageStyle>;
    rightImageStyle?: StyleProp<ImageStyle>;

    leftSource?: ImageSourcePropType;
    rightSource?: ImageSourcePropType;
    buttonProps?: TouchableOpacityProps;
    language?: Types.ILanguage;
  }

  export interface IButtonTab {
    index?: number;
    title: string;
    icon?: string;
    screen?: string;
    onPress?(): void;
  }

  export type SnackBarType = 'SUCCESS' | 'ERROR' | 'WARNING' | 'NETWORK';

  export interface IAlertButton {
    title: string;
    style?: StyleProp<ViewStyle>;
    onPress?: (response?: string) => void;
  }

  export interface ISnackBar {
    type?: SnackBarType;
    visible?: boolean;
    message: Maybe<string>;
    delay?: Maybe<number>;
    color?: string;
    backgroundColor?: string;
    buttons?: IAlertButton[];
    icon?: string;
  }

  export interface IHeaderContentProps {
    title?: ReactNode;
    headerLeft?: ReactNode;
    headerRight?: ReactNode;
    bgColor?: string;
    automaticallyApplyLeading?: boolean;
    centeredTitle?: boolean;
    headerLeftContainerStyles?: StyleProp<ViewStyle>;
    headerRightContainerStyles?: StyleProp<ViewStyle>;
    containerProps?: StyleProp<ViewStyle>;
    children?: ReactNode;
    textProps?: StyleProp<TextStyle>;
    backIconStyle?: StyleProp<TextStyle>;
    headerTitleContainerStyles?:
      | Animated.Value
      | Animated.AnimatedInterpolation
      | RegisteredStyle<ViewStyle>
      | Animated.WithAnimatedObject<ViewStyle>
      | null
      | undefined;
  }

  export interface ICustomHeader extends IHeaderContentProps {
    mainContainerStyles?:
      | Animated.Value
      | Animated.AnimatedInterpolation
      | RegisteredStyle<ViewStyle>
      | Animated.WithAnimatedObject<ViewStyle>
      | StyleProp<ViewStyle>
      | null
      | undefined;
    bottomContent?: React.ReactNode;
  }

  export interface ISkeleton {
    duration?: number;
    containerStyle?: StyleProp<ViewStyle>;
    backgroundColor?: string;
  }

  export interface ICustomModal extends ModalProps {
    isVisible?: boolean;
    showHeader?: boolean;
    onClosePress?(): void;
    onClose: () => void;
    headerLeft?: ReactNode;
    headerRight?: ReactNode;
    headerTitle?: string;
    children: ReactNode;
  }

  export interface InputProps extends TextInputProps {
    font?: IFont;
    style?: StyleProp<ViewStyle>;
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';

    iconStyle?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>;

    leftIcon?: string;
    rightIcon?: string;
    leftIconStyle?: StyleProp<TextStyle>;
    rightIconStyle?: StyleProp<TextStyle>;

    source?: ImageSourcePropType;
    imageStyle?: StyleProp<ImageStyle>;
    leftIconType?: 'material' | 'fontAweasome';
    rightIconType?: 'material' | 'fontAweasome';
    iconType?: 'material' | 'fontAweasome';
  }

  export interface IToats {
    type?: SnackBarType;
    visible?: boolean;
    message: Maybe<string>;
    color?: string;
    backgroundColor?: string;
    icon?: string;
    duration?: number;
    position?: 'top' | 'bottom';
  }

  export interface IButtomSheet extends Omit<BottomSheetProps, 'snapPoints'> {
    visible?: boolean;
    children: ReactNode;
    snapPoint?: Array<string | number> | SharedValue<Array<string | number>>;
    isModal?: boolean;
  }
}
