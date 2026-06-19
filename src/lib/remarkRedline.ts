import { visit } from 'unist-util-visit';

export default function remarkRedline() {
  return (tree: any) => {
    visit(tree, 'text', (node, index, parent) => {
      if (node.value && node.value.includes('Redline')) {
        const parts = node.value.split('Redline');
        const newNodes: any[] = [];
        
        parts.forEach((part: string, i: number) => {
          if (part) {
            newNodes.push({ type: 'text', value: part });
          }
          if (i < parts.length - 1) {
            newNodes.push({
              type: 'mdxJsxTextElement',
              name: 'span',
              attributes: [
                {
                  type: 'mdxJsxAttribute',
                  name: 'className',
                  value: 'text-primary'
                }
              ],
              children: [
                { type: 'text', value: 'Red' }
              ]
            });
            newNodes.push({ type: 'text', value: 'line' });
          }
        });
        
        if (parent && index !== undefined && newNodes.length > 0) {
          parent.children.splice(index, 1, ...newNodes);
          return index + newNodes.length; // Skip the newly inserted nodes to avoid infinite loops
        }
      }
    });
  };
}
