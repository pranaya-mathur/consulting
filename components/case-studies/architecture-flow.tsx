"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  type Edge,
  type Node,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: 2,
  padding: "10px 14px",
  fontSize: 12,
  color: "var(--foreground)",
};

const nodes: Node[] = [
  {
    id: "input",
    position: { x: 0, y: 80 },
    data: { label: "User / API Input" },
    style: nodeStyle,
  },
  {
    id: "guard",
    position: { x: 220, y: 80 },
    data: { label: "Policy Guard" },
    style: nodeStyle,
  },
  {
    id: "rag",
    position: { x: 440, y: 0 },
    data: { label: "Verified RAG" },
    style: nodeStyle,
  },
  {
    id: "agents",
    position: { x: 440, y: 160 },
    data: { label: "Agent Orchestrator" },
    style: nodeStyle,
  },
  {
    id: "output",
    position: { x: 660, y: 80 },
    data: { label: "Audited Output" },
    style: nodeStyle,
  },
];

const edges: Edge[] = [
  { id: "e1", source: "input", target: "guard" },
  { id: "e2", source: "guard", target: "rag" },
  { id: "e3", source: "guard", target: "agents" },
  { id: "e4", source: "rag", target: "output" },
  { id: "e5", source: "agents", target: "output" },
];

export function ArchitectureFlow() {
  return (
    <div className="h-[320px] w-full border border-border/80 bg-card/30">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="var(--border)"
        />
        <Controls showInteractive={false} className="!shadow-none" />
      </ReactFlow>
    </div>
  );
}
