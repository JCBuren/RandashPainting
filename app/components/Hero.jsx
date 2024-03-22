import React from "react";
import Link from "next/link";

const Hero = ({ heading, message }) => {
    return (
        <div className="relative mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Main1.jpg')]" style={{ height: "calc(80vh)" }}>
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 flex items-center justify-center z-[2]">
                <div className="p-5 text-white">
                    <h2 className="text-5xl mt-10 font-bold">{heading}</h2>
                    <p className="py-5 text-xl">{message}</p>
                    <Link href="/contact">
                        <button className="px-8 py-2 border-2 rounded-xl font-bold">Request an Estimate</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;