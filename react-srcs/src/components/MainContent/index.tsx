

type MainContentProps = {
    children: React.ReactNode
};

const MainContent = ({children}: MainContentProps) => {
    return (
        <main className="mt-2 p-3">
            {children} 
        </main>
    );
};

export default MainContent;