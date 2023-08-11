import { ChangeEventHandler } from 'react';
import './transition-input.scss';
interface Props {
    placeholder?: string;
    btnStyle?: string;
    inputStyle?: string;
    onChangeFn?: ChangeEventHandler<HTMLInputElement>;
    onClickFn?: Function;
}
declare function TransitionInput({ placeholder, btnStyle, inputStyle, onChangeFn, onClickFn }: Props): import("react/jsx-runtime").JSX.Element;
export default TransitionInput;
