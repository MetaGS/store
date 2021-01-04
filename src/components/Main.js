import './Main.css';

const Main = ({ children, extraClasses = '' }) => {
    return (
        <main className={`main ${extraClasses}`}>
            {children}
        </main>
    )
}

export default Main;