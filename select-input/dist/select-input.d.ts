import React, { ReactNode } from 'react';
import './select-input.scss';
interface Props {
    dataList?: Array<any>;
    placeholder?: string;
    btnValue?: string | ReactNode;
    dataValue?: string;
    searchFunction?: Function;
    autoComplete?: string;
    inputClassName?: string;
    btnClassName?: string;
    keyValue?: string;
}
declare function SelectInput({ dataList, placeholder, keyValue, dataValue, btnValue, searchFunction, autoComplete, inputClassName, btnClassName }: Props): React.JSX.Element;
export default SelectInput;
