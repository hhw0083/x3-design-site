"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeMouseHandler,
  type NodeProps,
} from "@xyflow/react";
import {
  esgSitemapEdges,
  esgSitemapNodes,
  type EsgSitemapNodeData,
} from "@/data/esgSitemap";

const COMPACT_NODE_LAYOUT: Record<
  string,
  {
    position: { x: number; y: number };
    width: number;
    height: number;
    fontSize: number;
    padding: number | string;
  }
> = {
  "platform-root": {
    position: { x: 8, y: 172 },
    width: 94,
    height: 76,
    fontSize: 12,
    padding: "12px 10px",
  },
  home: {
    position: { x: 148, y: 10 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  policy: {
    position: { x: 148, y: 54 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  method: {
    position: { x: 148, y: 98 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  "matching-flow": {
    position: { x: 148, y: 142 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  "matching-object": {
    position: { x: 148, y: 186 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  "esg-showcase": {
    position: { x: 148, y: 230 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  qa: {
    position: { x: 148, y: 274 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  map: {
    position: { x: 148, y: 318 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
  admin: {
    position: { x: 148, y: 362 },
    width: 128,
    height: 40,
    fontSize: 11,
    padding: "9px 10px",
  },
};

type InteractiveSitemapNodeData = EsgSitemapNodeData & {
  onSelect: (id: string) => void;
};

type InteractiveSitemapNode = Node<
  InteractiveSitemapNodeData,
  "sitemapNode"
>;

const handleStyle = {
  width: 8,
  height: 8,
  border: 0,
  background: "transparent",
  opacity: 0,
  pointerEvents: "none" as const,
};

function SitemapNodeCard({
  data,
  id,
}: NodeProps<InteractiveSitemapNode>) {
  return (
    <>
      {data.kind !== "root" ? (
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={false}
          style={handleStyle}
        />
      ) : null}
      <button
        type="button"
        className="flex h-full w-full items-center justify-center bg-transparent p-0 text-center font-[inherit] text-inherit"
        onPointerDown={(event) => {
          event.stopPropagation();
          data.onSelect(id);
        }}
        onClick={(event) => {
          event.stopPropagation();
          data.onSelect(id);
        }}
      >
        {data.label}
      </button>
      {data.kind === "root" ? (
        <Handle
          type="source"
          position={Position.Right}
          isConnectable={false}
          style={handleStyle}
        />
      ) : null}
    </>
  );
}

const nodeTypes = {
  sitemapNode: SitemapNodeCard,
};

function DetailPanel({ node }: { node: Node<EsgSitemapNodeData> }) {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:min-h-[760px]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Selected Module
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span
          className="size-3 rounded-full"
          style={{ backgroundColor: node.data.accent }}
        />
        <p className="text-sm font-semibold text-cyanline">
          {node.data.group}
        </p>
      </div>
      <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">
        {node.data.label}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        {node.data.description}
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            主要使用者
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {node.data.users.map((user) => (
              <span
                key={user}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                {user}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            主要功能
          </p>
          <div className="mt-3 grid gap-2">
            {node.data.features.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanline">
            涉及元件
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {node.data.components.map((component) => (
              <span
                key={component}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700"
              >
                {component}
              </span>
            ))}
          </div> */}
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            設計目的
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {node.data.designPurpose}
          </p>
        </div>
      </div>
    </aside>
  );
}

export function InteractiveSitemap() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(esgSitemapNodes[0]?.id);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncBreakpoint = () => setIsCompact(mediaQuery.matches);

    syncBreakpoint();
    mediaQuery.addEventListener("change", syncBreakpoint);

    return () => {
      mediaQuery.removeEventListener("change", syncBreakpoint);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const selectNode = (event: Event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const nodeElement = target.closest(".react-flow__node[data-id]");
      const nodeId = nodeElement?.getAttribute("data-id");

      if (nodeId) {
        setSelectedNodeId(nodeId);
      }
    };

    canvas.addEventListener("pointerdown", selectNode, true);
    canvas.addEventListener("click", selectNode, true);

    return () => {
      canvas.removeEventListener("pointerdown", selectNode, true);
      canvas.removeEventListener("click", selectNode, true);
    };
  }, []);

  const selectedNode = useMemo(
    () =>
      esgSitemapNodes.find((node) => node.id === selectedNodeId) ??
      esgSitemapNodes[0],
    [selectedNodeId],
  );

  const styledNodes = useMemo<InteractiveSitemapNode[]>(() => {
    return esgSitemapNodes.map((node) => {
      const compactLayout = isCompact ? COMPACT_NODE_LAYOUT[node.id] : null;

      return {
        ...node,
        type: "sitemapNode",
        data: {
          ...node.data,
          onSelect: setSelectedNodeId,
        },
        position: compactLayout?.position ?? node.position,
        width: compactLayout?.width ?? node.width,
        height: compactLayout?.height ?? node.height,
        initialWidth: compactLayout?.width ?? node.initialWidth,
        initialHeight: compactLayout?.height ?? node.initialHeight,
        measured: {
          width: compactLayout?.width ?? node.measured?.width,
          height: compactLayout?.height ?? node.measured?.height,
        },
        style: {
          ...node.style,
          width: compactLayout?.width ?? node.style?.width,
          height: compactLayout?.height ?? node.style?.height,
          fontSize: compactLayout?.fontSize ?? node.style?.fontSize,
          lineHeight: isCompact ? 1.35 : node.style?.lineHeight,
          padding: compactLayout?.padding ?? node.style?.padding,
          outline:
            node.id === selectedNode?.id
              ? `1.5px solid ${node.data.accent}`
              : "1px solid transparent",
          outlineOffset: 2,
          textAlign: "center" as const,
        },
      };
    });
  }, [isCompact, selectedNode?.id]);

  const onNodeClick: NodeMouseHandler = (_, node) => {
    setSelectedNodeId(node.id);
  };

  const styledEdges = useMemo<Edge[]>(
    () =>
      esgSitemapEdges.map((edge) => ({
        ...edge,
        style: {
          ...edge.style,
          stroke:
            edge.target === selectedNode?.id
              ? selectedNode.data.accent
              : "rgba(148, 163, 184, 0.55)",
          strokeWidth: edge.target === selectedNode?.id ? 1.8 : 1.1,
        },
      })),
    [selectedNode],
  );

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-portfolio-card">
      <div className="border-b border-slate-200 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyanline">
          Interactive Sitemap
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950">
          ESG 平台模組地圖
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          此 Sitemap 將企業、地主、政府管理者三種角色的任務路徑重新整理為九大模組，協助團隊在複雜媒合、審核、成果追蹤與地圖資料之間建立清楚的資訊架構。
        </p>
      </div>

      <div className="grid items-stretch gap-4 p-3 sm:p-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div
          className="h-[420px] overflow-hidden rounded-lg border border-slate-200 bg-[#fbfbfc] lg:h-full lg:min-h-[760px]"
          data-ia-edge-count={esgSitemapEdges.length}
        >
          <div ref={canvasRef} className="relative h-full w-full">
            <ReactFlow
              key={isCompact ? "compact-sitemap" : "desktop-sitemap"}
              nodeTypes={nodeTypes}
              nodes={styledNodes}
              edges={styledEdges}
              onNodeClick={onNodeClick}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable
              panOnDrag={false}
              panOnScroll={false}
              preventScrolling={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}

              fitView
              fitViewOptions={{ padding: isCompact ? 0.05 : 0.12 }}
              onInit={(instance) => {
                window.setTimeout(() => {
                  instance.fitView({ padding: isCompact ? 0.05 : 0.2 });
                }, 80);
              }}
              minZoom={0.35}
              maxZoom={1.4}
              proOptions={{ hideAttribution: true }}
            >
              <Background
                color="rgba(148, 163, 184, 0.24)"
                gap={28}
                size={1}
                variant={BackgroundVariant.Dots}
              />

            </ReactFlow>
          </div>
        </div>

        {selectedNode ? <DetailPanel node={selectedNode} /> : null}
      </div>
    </div>
  );
}
