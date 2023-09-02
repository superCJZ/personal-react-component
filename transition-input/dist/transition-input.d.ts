/// <reference types="react" />
import './index.scss';
interface Props {
    placeholder?: string;
    btnStyle?: string;
    inputStyle?: string;
    onChangeFn?: Function;
    onClickFn?: Function;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    value?: string;
    width?: string;
}
declare function TransitionInput({ width, placeholder, btnStyle, inputStyle, onChangeFn, onClickFn, onFocus, value }: Props): import("react/jsx-runtime").JSX.Element;
export default TransitionInput;
