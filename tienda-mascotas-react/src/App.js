import "./App.css";
import Products from "./components/products/Products";
import ProductItem from "./components/products/ProductItem";
import "./components/products/Products.css";

const App = () => {

  const dProducts = 
  [
    {
      id: 1,
      img: "",
      name: "Nutri Care Ad x22",
      price: 4990,
      quality: "5",
      action: "<button>Comprar</button>",
    },
    {
      id: 1,
      img: "",
      name: "Nutri Care Ad x22",
      price: 4990,
      quality: "5",
      action: "<button>Comprar</button>",
    },
    {
      id: 1,
      img: "",
      name: "Nutri Care Ad x22",
      price: 4990,
      quality: "5",
      action: "<button>Comprar</button>",
    }
  ];


  return (
    <div>
      <h2>Delivery Mascotas</h2>
      <h3>Tienda online</h3>            
      <h3 className="neon-green">probando branch</h3>  

      <ProductItem Products = { Products } />
      <ProductItem Products = { Products } />
      <ProductItem Products = { Products } />
      {/*<div class="container">
        <div class="wrapper">
          <div class="green one neon-green">
            <h2><i class="fa-solid fa-desktop padding"></i></h2>
            <h3 class="title margin">Title I</h3>
            <p class="clare">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              beatae dolorum eum animi magnam tempora molestiae dolor labore
              cumque reiciendis aliquam officia voluptas aut dolorem, quis
              ratione quidem hic in.
            </p>
          </div>
          <div class="blue two neon-blue">
            <h2><i class="fa-solid fa-keyboard padding"></i></h2>
            <h3 class="title margin">Title II</h3>
            <p class="clare">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati consectetur necessitatibus unde fugiat pariatur qui
              magni odio, perferendis, dicta perspiciatis dignissimos, molestias
              aspernatur minima asperiores quo inventore enim natus cum.
            </p>
          </div>
          <div class="orange three neon-orange">
            <h2><i class="fa-solid fa-database padding"></i></h2>
            <h3 class="title margin">Title III</h3>
            <p class="clare">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              unde? Illum ratione consectetur magni pariatur error, soluta
              similique odio distinctio tenetur esse quibusdam nesciunt nobis
              tempora asperiores a debitis fugit.
            </p>
          </div>
        </div>      
    
        <div class="container cajas-body">
          <h2 class="title neon-blue underline-orange">
            <span class="neon-green">L</span>inke<span class="neon-green">d</span>
          </h2>
          <div class="wrapper">
            <div class="green one neon-green">
              <h2><i class="fa-solid fa-desktop padding"></i></h2>
              <h3 class="title margin">Title I </h3>
              <p class="clare">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                beatae dolorum eum animi magnam tempora molestiae dolor labore
                cumque reiciendis aliquam officia voluptas aut dolorem, quis
                ratione quidem hic in.
              </p>
            </div>
            <div class="blue two neon-blue">
              <h2><i class="fa-solid fa-keyboard padding"></i></h2>
              <h3 class="title margin">Title II</h3>
              <p class="clare">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati consectetur necessitatibus unde fugiat pariatur qui
                magni odio, perferendis, dicta perspiciatis dignissimos, molestias
                aspernatur minima asperiores quo inventore enim natus cum.
              </p>
            </div>
            <div class="orange three neon-orange">
              <h2><i class="fa-solid fa-database padding"></i></h2>
              <h3 class="title margin">Tittle III</h3>
              <p class="clare">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
                unde? Illum ratione consectetur magni pariatur error, soluta
                similique odio distinctio tenetur esse quibusdam nesciunt nobis
                tempora asperiores a debitis fugit.
              </p>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  
  )

}

export default App;
