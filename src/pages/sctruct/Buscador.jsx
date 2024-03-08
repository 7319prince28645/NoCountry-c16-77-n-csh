import { useState, useEffect } from "react";
import datos from "../../lib/DatosBuscador";
import lupa from "../../assets/lupa.svg";
import { getProducts } from "../../services/Products.services";
import { CategoryService } from "../../services/Cateogory.services";
import { Link } from "react-router-dom";

function Buscador() {
  const [getAllProducts, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getAProducts = async () => {
    try {
      const response = await getProducts();
      const response2 = await CategoryService();
      setCategory(response2);
      setProducts(response);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
  useEffect(() => {
    getAProducts();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchVal(searchTerm);

    const filtered = getAllProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex relative md:right-0 lg:right-20 xl:right-28 pl-48">
      <input
        type="text"
        value={searchVal}
        onChange={handleInputChange}
        placeholder="¿Qué estás buscando?"
        className="lg:w-96 border-white placeholder:italic placeholder:text-white"
      />
      <span className="border-b-[1px]">
        <img src={lupa} alt="" />
      </span>
      {searchVal && (
        <ul className="active absolute top-7 left-48 bg-slate-100 border-[1px] border-[#ccc] p-3 z-50 text-black w-[410px] rounded-md h-96 overflow-y-scroll">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/Product/${category.find(item => item.id === product.categoryId)?.name}/${product.id}`}>
                <li
                  key={product.id}
                  className="flex gap-5 my-3 p-1 rounded-lg hover:bg-gray-200 hover:cursor-pointer"
                >
                  <div>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-w-14"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <span>
                        {product.name} {product.brandId} {product.categoryId}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#FFA62b] text-lg font-medium">
                        $ {product.price}
                      </span>
                    </div>
                  </div>
                </li>
              </Link>
            ))
          ) : (
            <li>No se encontró el producto</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Buscador;
