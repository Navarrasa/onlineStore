import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

function DefaultLayout() {

	return(
		<>    
			<Header />
				<Main />
			<Footer />
		</>
	);
}

export default DefaultLayout;
