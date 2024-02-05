import React from 'react';
import TreeNode from './TreeNode';
import { ParsedTreeData } from './TreeUtils'

interface TreeViewProps {
  data: ParsedTreeData;
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  const rootNodes = data.filter((node) => !node.parentName);

  return (
    <div className="tree-view">
      {rootNodes.map((rootNode) => (
        <TreeNode key={rootNode.name} node={rootNode} data={data} />
      ))}
    </div>
  );
};

export default TreeView;
