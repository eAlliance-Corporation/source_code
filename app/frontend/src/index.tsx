import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";

import "./index.css";

import { ContextProvider } from "./context/store";
import Layout from "./pages/layout/Layout";
import Chat from "./pages/chat/Chat";
import Document from "./pages/document/Document";

initializeIcons();

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Chat />
            },
            {
                path: "/documents",
                element: <Document />
            },
            {
                path: "*",
                lazy: () => import("./pages/NoPage")
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
);
