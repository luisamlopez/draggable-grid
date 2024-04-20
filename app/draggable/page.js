"use client";
import React, { useCallback, useEffect, useState } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';


import Grid from '@/components/Grid';
import SortableItem from '@/components/SortableItem';
import CourseCard from '@/components/CourseCard';
import Link from 'next/link';

function Page() {
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
    const [cards, setCards] = useState([]);
    const [originalCards, setOriginalCards] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const saveNewPositions = () => {
        if (!editMode) {
            setEditMode(true);
            return;
        } else {
            const changedCards = originalCards.filter(originalCard => {
                const currentCard = cards.find(card => card.id === originalCard.id);
                return currentCard.position !== originalCard.position;
            });

            changedCards.forEach(changedCard => {
                const originalPosition = originalCards.find(card => card.id === changedCard.id).position;
                const currentPosition = cards.find(card => card.id === changedCard.id).position;
                console.log(`El curso "${changedCard.title}" cambió de posición de ${originalPosition} a ${currentPosition}`);
            });

            setEditMode(false);
        }
    };



    useEffect(() => {

        const dataFromDatabase = (
            [{
                id: 1,
                title: "Curso de React",
                slug: "curso-de-react",
                short_desc: "Aprende React desde cero",
                latest_price: 0,
                before_price: 0,
                lessons: 10,
                enrolmentsCount: 100,
                user: {
                    first_name: "Juan",
                    last_name: "Perez",
                    profile_photo: "juan.jpg"
                },
                position: 1
            },

            {
                id: 2,
                title: "Curso de Angular",
                slug: "curso-de-angular",
                short_desc: "Aprende Angular desde cero",
                latest_price: 0,
                before_price: 0,
                lessons: 10,
                enrolmentsCount: 100,
                user: {
                    first_name: "Juan",
                    last_name: "Perez",
                    profile_photo: "juan.jpg"
                },
                position: 2
            },

            {
                id: 3,
                title: "Curso de Vue",
                slug: "curso-de-vue",
                short_desc: "Aprende Vue desde cero",
                latest_price: 0,
                before_price: 0,
                lessons: 10,
                enrolmentsCount: 100,
                user: {
                    first_name: "Juan",
                    last_name: "Perez",
                    profile_photo: "juan.jpg"
                },
                position: 3
            },

            {
                id: 4,
                title: "Curso de Node",
                slug: "curso-de-node",
                short_desc: "Aprende Node desde cero",
                latest_price: 0,
                before_price: 0,
                lessons: 10,
                enrolmentsCount: 100,
                user: {
                    first_name: "Juan",
                    last_name: "Perez",
                    profile_photo: "juan.jpg"
                },
                position: 4
            },

            {
                id: 5,
                title: "Curso de Python",
                slug: "curso-de-python",
                short_desc: "Aprende Python desde cero",
                latest_price: 0,
                before_price: 0,
                lessons: 10,
                enrolmentsCount: 100,
                user: {
                    first_name: "Juan",
                    last_name: "Perez",
                    profile_photo: "juan.jpg"
                },
                position: 5
            },

            {
                id: 6,
                title: "Curso de Java",
                slug: "curso-de-java",
                short_desc: "Aprende Java desde cero",
                latest_price: 0,
                before_price: 0,
                lessons: 10,
                enrolmentsCount: 100,
                user: {
                    first_name: "Juan",
                    last_name: "Perez",
                    profile_photo: "juan.jpg"
                },
                position: 6
            },

            {
                id: 7,
                title: "Curso de C#",
                slug: "curso-de-c#",
                short_desc: "Aprende C# desde cero",
                latest_price: 0,
                before_price: 0,
                lessons: 10,
                enrolmentsCount: 100,
                user: {
                    first_name: "Juan",
                    last_name: "Perez",
                    profile_photo: "juan.jpg"
                },
                position: 7
            },
            ]

        )

        setCards(dataFromDatabase);
        setOriginalCards(dataFromDatabase);

    }, [])

    const handleDragStart = useCallback((event) => {
        setActiveId(event.active);
    }, []);

    const handleDragEnd = useCallback((event) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const draggedCard = cards.find(card => card.id === active.id);
            const draggedIndex = cards.findIndex(card => card.id === active.id);
            const overIndex = cards.findIndex(card => card.id === over.id);

            setCards(prevCards => {
                const newCards = [...prevCards];
                newCards.splice(draggedIndex, 1);
                newCards.splice(overIndex, 0, draggedCard);
                return newCards.map((card, index) => ({
                    ...card,
                    position: index + 1
                }));
            });
        }

        setActiveId(null);
    }, [cards]);

    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, []);

    return (
        <> <h1>DnD</h1>
            <Link href="/">
                Ir a la versión pura
            </Link>
            {!editMode && <button onClick={() => setEditMode(!editMode)}>Editar Posiciones</button>}
            {editMode && (
                <button onClick={saveNewPositions}>Guardar Posiciones</button>
            )}
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext items={cards} strategy={rectSortingStrategy} disabled={!editMode}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridGap: 20,
                        padding: 20
                    }}>
                        {cards.map((card) => (
                            <SortableItem
                                key={card.position} id={card.position} card={card} isDraggable={editMode} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                    {activeId ? <CourseCard id={activeId} isDragging /> : null}
                </DragOverlay>
            </DndContext>

        </>

    );


}

export default Page;