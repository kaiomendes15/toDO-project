type BtnAddTaskProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

const BtnAddTask = ({children, onClick}: BtnAddTaskProps) => {
    return (
        <button className="BtnAddTask" onClick={onClick}>
            {children}
        </button>
    )
}

export default BtnAddTask;