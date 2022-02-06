import Bar from "./Bar";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div>
            <div style={{position:'sticky',top:0,zIndex:200}}>
            <Header  />
            <Bar />
            </div>
            {props.children}
        </div>
    )
}
export default Layout;