export interface TreeNodeData {
    name: string;
    parentName: string | null;
    childrenNames: string[];
  }
  
  export type ParsedTreeData = TreeNodeData[];
  
 
  