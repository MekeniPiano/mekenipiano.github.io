import Head from "next/head";
import React from "react";
import Header from "./header";

export default function Layout(props: {children: React.ReactNode, title: string}) {
    return <div>
        <Head>
            <title>{props.title}</title>
        </Head>
        <Header/>
        <h1>{props.title}</h1>
        <div>
            {props.children}
        </div>
    </div>
}