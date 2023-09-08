import { ReactNode } from 'react';
import './tree.scss';
import React from 'react';
interface Props {
    treeData?: any[];
    treeTitle?: string;
    treeKey?: string;
    switcherIcon?: ReactNode;
    noChildIcon?: ReactNode;
    selectedCallback?: Function;
    defaultExpendedKeys?: string[];
    treeHeight?: number;
    treeWidth?: number;
    defaultExpendedKeysAll?: boolean;
}
declare function Tree({ treeData, treeTitle, treeKey, switcherIcon, noChildIcon, selectedCallback, defaultExpendedKeys, treeHeight, treeWidth, defaultExpendedKeysAll }: Props): React.JSX.Element;
export default Tree;
