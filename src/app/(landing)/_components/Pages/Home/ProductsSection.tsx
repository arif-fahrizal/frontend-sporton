import CardProduct from '@/app/(landing)/_components/UI/Cards/CardProduct';

const PRODUCTS = [
  {
    name: 'SportsOn Product 1',
    category: 'Running',
    price: 450000,
    image: 'shoes-white-red.png',
  },
  {
    name: 'SportsOn Product 2',
    category: 'Tennis',
    price: 250000,
    image: 'racket-black.png',
  },
  {
    name: 'SportsOn Product 3',
    category: 'Clothing',
    price: 230000,
    image: 'jersey-red.png',
  },
  {
    name: 'SportsOn Product 4',
    category: 'Football',
    price: 440000,
    image: 'shoes-black.png',
  },
  {
    name: 'SportsOn Product 5',
    category: 'Clothing',
    price: 230000,
    image: 'jersey-gray.png',
  },
  {
    name: 'SportsOn Product 6',
    category: 'Tennis',
    price: 250000,
    image: 'racket-green.png',
  },
  {
    name: 'SportsOn Product 1',
    category: 'Running',
    price: 450000,
    image: 'shoes-white-red.png',
  },
  {
    name: 'SportsOn Product 2',
    category: 'Tennis',
    price: 250000,
    image: 'racket-black.png',
  },
];

export default function ProductsSection() {
  return (
    <section id="products-section" className="container mt-32 mx-auto">
      <h2 className="mb-11 text-4xl text-center font-bold italic">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {PRODUCTS.map((product, index) => (
          <CardProduct
            key={`product-${index}`}
            name={product.name}
            image={`/products/${product.image}`}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
