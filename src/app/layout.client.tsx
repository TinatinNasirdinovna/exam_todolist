"use client"
import ReduxProvier from "@/providers/ReduxProvier";
import { FC, ReactNode } from "react";

interface IlayoutClientProps {
    children: ReactNode;
}

const LayoutClient: FC<IlayoutClientProps> = ({ children }) => {
    return <ReduxProvier>{children}</ReduxProvier>;
};

export default LayoutClient;