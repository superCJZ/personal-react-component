import React from 'react';
interface Props {
    dataList?: Array<any>;
    placeholder?: string;
    btnValue?: string;
    data?: string;
    searchFunction?: Function;
}
declare function SelectInput({ dataList, placeholder, data, btnValue, searchFunction }: Props): React.JSX.Element;
export default SelectInput;
