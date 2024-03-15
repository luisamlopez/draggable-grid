import React, { useEffect, useState } from "react";
import Link from "next/link";

const CourseCard = ({
    id,
    title,
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

}) => {


    return (
        <div className={className} onDrop={onDrop} onDragOver={onDragOver} onDragEnd={onDragEnd} onDragStart={onDragStart} draggable={isDraggable} style={{
            cursor: `${isDraggable ? "grab" : "pointer"}`, border: `2px solid ${className === "card dragging" ? "red" : "black"}`, boxShadow: `${className === "card dragging" ? "0 0 10px 0 red" : "none"}`, padding: "10px",
            backgroundColor: `${className !== "card dragging" ? "rgba(255, 0, 0, 0.1)" : "white"}`
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
                    <div >

                        <span>{`${user.first_name} ${user.last_name}`}</span>
                    </div>

                    <h3>
                        <Link href={`/course/${slug}`}>

                            {title.slice(0, 40)}...

                        </Link>
                    </h3>

                    <p >{short_desc.slice(0, 108)}</p>
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
};

export default CourseCard;
