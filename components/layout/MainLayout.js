import "../../scss/styles.scss"

export const MainLayout = (props) => (
    <div className="container m-auto">
        {props.children}
    </div>
)