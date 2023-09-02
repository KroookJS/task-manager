export interface IFakerData {
    startdate: Date;
    completionDate: Date;
    description: string;
}

export interface IButton {
    children: string;
    bg: string;
    color: string;
}
  
export interface IPropsButton {
    bg: string;
    color: string;
}

export  interface ITodoItem {
    title: string;
    completed: boolean;
}