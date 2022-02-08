import Bar from "./Bar";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div>
            <div style={{margin:0,padding:0,position:'sticky',top:0,zIndex:200}}>
            <Header  />
            <Bar />
            </div>
            {props.children}
        </div>
    )
}
export default Layout;