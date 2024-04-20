import React, { FC } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Item, { ItemProps } from "./Item";
import CourseCard from "./CourseCard";

const SortableItem = ({ card, isDraggable }) => {
    const {
        isDragging,
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: card.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    };

    return (
        <CourseCard
            ref={setNodeRef}
            style={style}
            withOpacity={isDragging}
            {...card}
            {...attributes}
            {...listeners}
        />
    );
};
export default SortableItem;
