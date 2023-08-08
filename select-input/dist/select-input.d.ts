interface Props {
    dataList?: Array<any>;
    placeholder?: string;
    btnValue?: string;
    data?: string;
    setKey?: string;
    searchFunction?: Function;
}
declare function SelectInput({ dataList, placeholder, data, btnValue, searchFunction, setKey }: Props): import("react/jsx-runtime").JSX.Element;
export default SelectInput;
