"use client"; // This is a client component 👈🏽
import CourseCard from "@/components/CourseCard";
import { useEffect, useState } from "react";

const Index = () => {
    const [cards, setCards] = useState([])


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
            },
            ]

        )


    }, [])


    return (
        <div>
            <h1>Pure</h1>
            {/* Grid of cards */}



            <div className="row justify-content-center">
                {cards.map((card) => (
                    <CourseCard key={card.id} {...card} />
                ))}
            </div>

        </div>
    );
}

export default Index;