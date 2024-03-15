"use client";
import CourseCard from "@/components/CourseCard";
import { useEffect, useState } from "react";



export default function Home() {
  const [cards, setCards] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const [editMode, setEditMode] = useState(false); // Nuevo estado para el modo de edición

  const handleDragStart = (e, card) => {
    setDraggingItem(card);
    e.dataTransfer.setData('text/plain', '');
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    if (!draggingItem) return;

    const currentIndex = cards.indexOf(draggingItem);
    const targetIndex = cards.indexOf(targetItem);

    if (currentIndex !== -1 && targetIndex !== -1) {
      const newItems = [...cards];
      newItems.splice(currentIndex, 1);
      newItems.splice(targetIndex, 0, draggingItem);
      setCards(newItems);
    }
  };

  const saveNewPositions = () => {
    // Aquí puedes enviar las nuevas posiciones al servidor para guardarlas en la base de datos
    console.log("Nuevas posiciones guardadas:", cards);
    setEditMode(false); // Salimos del modo de edición después de guardar
  };


  useEffect(() => {

    setCards(

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


  }, [])


  return (
    <div>
      <h1>Pure</h1>
      {!editMode && <button onClick={() => setEditMode(!editMode)}>
        Editar Posiciones
      </button>}
      {/* Grid of cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
        padding: 20
      }}>
        {cards.map((card, i) => (
          <CourseCard key={i} {...card}
            className={`card ${card === draggingItem ? 'dragging' : ''}`} onDragStart={(e) => handleDragStart(e, card)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, card)}
            isDraggable={editMode}
          />

        ))}
      </div>

      {editMode && (
        <button onClick={saveNewPositions}>Guardar Posiciones</button>
      )}

    </div>
  );
}
