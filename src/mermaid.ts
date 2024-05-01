import { GraphData } from "graphai";
import { parseNodeName } from "graphai/lib/utils/utils";

export const mermaid = (graphData: GraphData) => {
  Object.keys(graphData.nodes).forEach((nodeId) => {
    const node = graphData.nodes[nodeId];
    // label / name
    if ("agentId" in node) {
      if (node.inputs) {
        node.inputs.forEach((input) => {
          const source = parseNodeName(input);
          if (source.propIds) {
            console.log(` ${source.nodeId}(${source.nodeId}) -- ${source.propIds.join(".")} --> ${nodeId}`);
          } else {
            console.log(` ${source.nodeId}(${source.nodeId}) --> ${nodeId}`);
          }
        });
      }
    }
    if ("value" in node) {
      console.log(node.value);
    }
  });
};
