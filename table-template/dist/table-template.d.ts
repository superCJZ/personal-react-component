import './table-template.scss';
interface Props {
    columns?: Array<any>;
    lists?: Array<any>;
    editRow?: Function;
    deleteData?: Function;
    isLoading?: boolean;
    theadStyle?: string;
    tableStyle?: string;
    rowKeyField: string;
}
declare function TableTemplate({ columns, lists, editRow, deleteData, isLoading, theadStyle, tableStyle, rowKeyField }: Props): import("react/jsx-runtime").JSX.Element;
export default TableTemplate;
