/**
 * Node Modules
 */
import React from "react";

/**
 * Components
 */
import Searchbar from "../_components/searchbar";

export default function SearchbarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Searchbar />
            { children }
        </>
    )
}