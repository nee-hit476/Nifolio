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

export interface InfoTipProjectProps {
    children: React.ReactNode;
    text: string;
}

export interface ProjectBoxProps {
    img: string;
    status: boolean;
    title: string;
    content: string;
    url: string;
    github: string;
    skill: string[];
}