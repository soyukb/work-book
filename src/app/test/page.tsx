"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

export default function Example() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      <div className="bg-orange-200">Go ahead, drag me.</div>
    </Draggable>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="grid h-full grid-flow-col grid-cols-2 grid-rows-2 gap-4 py-2">
        <div className="row-span-2 ">
          <span>現金を貸し付けた</span>
          <Droppable id="droppable">
            {parent === "droppable" ? draggable : "Drop here"}
          </Droppable>
        </div>

        <div className="rounded-lg bg-lime-200 shadow-2xl">
          AccountItem
          {!parent ? draggable : null}
        </div>
        <div className="rounded-lg bg-teal-200 shadow-2xl">金額</div>
      </main>
    </DndContext>
  );
}
