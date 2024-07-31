type BtnCompleteProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

const BtnComplete = ({children, onClick}: BtnCompleteProps) => {
    return (
        <button className="btnComplete" onClick={onClick}>
            {children}
        </button>
    )
}

export default BtnComplete;