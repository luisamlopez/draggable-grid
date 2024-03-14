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
}) => {


    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-courses-box">




                <>
                    {before_price > 0 && (
                        <div className="price shadow discount-price">
                            <del>${before_price}</del>
                        </div>
                    )}
                    <div className="price shadow">
                        {latest_price > 0 ? `$${latest_price}` : "Gratis"}
                    </div>
                </>

                <div className="courses-content">
                    <div className="course-author d-flex align-items-center">

                        <span>{`${user.first_name} ${user.last_name}`}</span>
                    </div>

                    <h3>
                        <Link href={`/course/${slug}`}>

                            {title.slice(0, 40)}...

                        </Link>
                    </h3>

                    <p className="course-description">{short_desc.slice(0, 108)}</p>
                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                            <i className="flaticon-agenda"></i> {lessons} Lecciones
                        </li>
                        <li>
                            <i className="flaticon-people"></i> {enrolmentsCount}{" "}
                            Estudiantes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
