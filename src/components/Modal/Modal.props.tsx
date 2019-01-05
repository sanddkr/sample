import { ReactNode } from "react";

export interface ModalProps {
    children: {
        modalheader?: React.ReactNode,
        modalbody: React.ReactNode,
        linktext: React.ReactNode
    }
}