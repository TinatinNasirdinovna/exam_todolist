"use client"
import { api } from "@/redux/api";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { FC, ReactNode } from "react";

interface IReduxProvierProps {
    children: ReactNode;
}

const ReduxProvier: FC<IReduxProvierProps> = ({ children }) => {
    return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvier;