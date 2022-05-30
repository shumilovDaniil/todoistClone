export interface ITask {
    id: number,
    value: string,
    category: string,
    children?: JSX.Element | React.ReactNode
}
