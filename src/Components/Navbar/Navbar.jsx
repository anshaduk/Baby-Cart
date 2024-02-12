import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import Form from 'react-router-dom' is removed
import CartContext from '../Context/Cart/CartContext';
import { useNewCartContext } from '../Context/NewCart';
import { Form, Button } from 'react-bootstrap'; // Importing Form and Button from react-bootstrap

const Navbar = () => {
  const { search, setSearch,cartItems,user,setUser } = useNewCartContext();
  const navigate = useNavigate();
  const { cartItem, all_product } = useContext(CartContext);

  const logout=()=>{
    setUser(null)
    navigate('/login')
  }

  const searchbtn = (e) => {
    e.preventDefault();
    let searched = e.target[0].value;
    if (!searched) {
      alert('please enter a search keyword');
    } else {
      let searchdone = all_product.filter((item) => item.category.includes(searched));
      console.log(searchdone);
      if (searchdone[0] !== undefined) {
        navigate('/shop');
        setSearch(searchdone);
      } else {
        alert('no item shows');
      }
    }
  };

  return (
    <header className="text-gray-600 body-font shadow-md cursor-pointer">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'}>
          <a className=" flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Baby Cart</span>
          </a>
        </Link>

        <Form onSubmit={searchbtn} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            className={({ isActive }) => (isActive ? 'text-red-500 mr-5' : 'mr-5 hover:text-gray-900')}
            to={'/'}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-red-500 mr-5' : 'mr-5 hover:text-gray-900')}
            to={'/shop'}
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-red-500 mr-5' : 'mr-5 hover:text-gray-900')}
            to={'/clothes'}
          >
            Clothes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-red-500 mr-5' : 'mr-5 hover:text-gray-900')}
            to={'/nursery'}
          >
            Nursery
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-red-500 mr-5' : 'mr-5 hover:text-gray-900')}
            to={'/nutrition'}
          >
            Nutrition
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-red-500 mr-5' : 'mr-5 hover:text-gray-900')}
            to={'/toys'}
          >
            Toys
          </NavLink>
        </nav>
        <Link to={'/login'}>
          <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link> 

        
          <button onClick={logout} className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 ml-4 md:mt-0 ">
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          {/* <p>{user.userName}</p> */}
        

        <Link to={'/Cart'}>
          <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  mt-4 md:mt-0 mx-2 pl-5 pr-4">
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            <p>{cartItems.length}</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
