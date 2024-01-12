'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Result } from "postcss";
import { Result1 } from "./Questions/Result1";
import { Result2 } from "./Questions/Result2";

export const Resultat = () => {
    return (
        <div className="flex flex-col justify-between h-full">
            {/* <Result1 /> */}

            <Result2 />
        </div >
    );
};
