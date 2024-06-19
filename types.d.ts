import { ViewStyle } from 'react-native';
declare module 'react-native-modal-loader' {
    interface LoaderInterface {
        loading: boolean,
        color?: string;
        size?: number;
        opacity?: number;
        title?: string;
        titleStyle?: ViewStyle;
        contentBgStyle?: ViewStyle
    }

    const Loader: (props: LoaderInterface) => any;
    export default Loader;

}
