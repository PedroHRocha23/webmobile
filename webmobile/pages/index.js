import Link from 'next/link';

export default function HomePage({ products }) {
  return (
    <div className="container">
      <h1>Catálogo de Produtos</h1>
      <Link href="/novo-produto">
        <button style={{ marginBottom: '20px' }}>Adicionar Produto</button>
      </Link>
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index} className="product-item">
              <h3>{product.name}</h3>
              <p>Preço: R$ {product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
