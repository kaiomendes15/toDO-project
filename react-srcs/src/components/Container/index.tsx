

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({children}: ContainerProps) => {
    return (
        <div className="container container-fluid p-0">
            {children}
        </div>
    );
};

export default Container;