import { Outlet } from "react-router";

function Main() {

    return(
        <main className="w-full h-auto bg-gray-400">
            <Outlet/>
        </main>
    );

}

export default Main;