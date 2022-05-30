export interface ITask {
    id: number,
    value: string,
    children?: JSX.Element | React.ReactNode
}