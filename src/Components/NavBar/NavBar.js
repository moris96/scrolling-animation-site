// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import './NavBar.css'


// export default function NavBar(){
//     const navRef = useRef()

//     const showNav = () => {
//         navRef.current.classList.toggle(
//             "responsive_nav"
//         )
//     }

//     return(
//         <>
//             <header>
//                 <h3>LOGO</h3>
//                 <nav ref={navRef}>
//                     <a href="/#">Home</a>
//                     <a href="/#">About Us</a>
//                     <a href="/#">What We Do</a>
//                     <a href="/#">Services</a>
                    
//                     <button
//                     className="nav-btn nav-close-btn"
//                     onClick={showNav}>
//                     <FaTimes/>
//                     </button>
//                 </nav>

//                 <button
//                 className="nav-btn"
//                 onClick={showNav}>
//                 <FaBars/>
//                 </button>
                
//             </header>
//         </>
//     );
// };



import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">What We Do</a>
				<a href="/#">Services</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;