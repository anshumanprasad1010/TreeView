import React from 'react';
import { TreeNodeData } from './TreeUtils'


interface TreeNodeProps {
  node: TreeNodeData;
  data: TreeNodeData[];
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, data }) => (
    <div className={`${node.parentName ? 'entry' : ''}`}><span className ='label'>{node.name}</span>
    <div className= {`${node.childrenNames.length>0 ? 'tree-node' : ''}`}>
    {node.childrenNames.length > 0 && (
        node.childrenNames.map((childNodeName) => {
          const childNode = data.find((item) => item.name === childNodeName);
          if (childNode) {
            return <TreeNode key={childNode.name} node={childNode} data={data} />;
          }
          return null;
        })
    )}
    </div>
    </div>
);

export default TreeNode;
