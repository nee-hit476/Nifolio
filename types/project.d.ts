import { Component } from "react";

export interface BadgesProps {
    icon: React.ReactElement;
    text?: string;
}

export interface ScreenProps {
    children: React.ReactNode;
}

export interface SectionTitleProps {
    text: string;
    className: string;
}