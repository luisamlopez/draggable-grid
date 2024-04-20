import React, { forwardRef, useEffect, useState } from "react";

const CourseCard = forwardRef(({ title,
    slug,
    short_desc,
    latest_price,
    before_price,
    lessons,
    user,
    enrolmentsCount,
    position,
    className,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
    isDraggable,
    dnd,
    withOpacity, isDragging,
    ...props
}, ref) => {


    return (
        <div ref={ref} {...props} className={className} draggable={isDraggable}
            style={{
                cursor: isDraggable ? 'grab' : 'pointer',
                border: `2px solid ${className === "card dragging" ? "red" : "black"}`, boxShadow: `${className === "card dragging" ? "0 0 10px 0 red" : "none"}`, padding: "10px",
                backgroundColor: `${className !== "card dragging" ? "rgba(255, 0, 0, 0.1)" : "white"}`,
                transition: "transform 0.3s ease",
                transformOrigin: '50% 50%',
                transform: isDragging ? 'scale(1.05)' : 'scale(1)',
                opacity: withOpacity ? '0.5' : '1',
            }}
        >
            <div >
                <>
                    {position}
                    {isDraggable ? " (Draggable)" : ""}
                    {before_price > 0 && (
                        <div >
                            <del>${before_price}</del>
                        </div>
                    )}
                    <div >
                        {latest_price > 0 ? `$${latest_price}` : "Gratis"}
                    </div>
                </>

                <div >
                    {/* <div >

                        <span>{`${user.first_name} ${user.last_name}`}</span>
                    </div> */}

                    <h3>

                        {title}...


                    </h3>

                    <p >{short_desc}</p>
                    <ul >
                        <li>
                            <i ></i> {lessons} Lecciones
                        </li>
                        <li>
                            <i ></i> {enrolmentsCount}{" "}
                            Estudiantes
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
});

export default CourseCard;
