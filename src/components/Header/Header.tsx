export function Header() {
  return (
    <header>
      <div className='alerts'>
        <span>
          <img src="/navigationIcons/shieldCheck.svg" alt="" />
          <p>Compra<strong>100% segura</strong></p>
        </span>
        <span>
          <img src="/navigationIcons/truck.svg" alt="" />
          <p><strong>Frete grátis</strong>acima de R$200</p>
        </span>
        <span>
          <img src="/navigationIcons/creditCard.svg" alt="" />
          <p><strong>Parcele</strong>suas compras</p>
        </span>
      </div>
      <div className='navigation'>
        <img src="/logos/VTEX Pink Logo.svg" alt="" />
        <span>
          <input type="text" name="pesquisa" id="pesquisa" placeholder="O que você está buscando?" />
          <button><img src="/navigationIcons/search.svg" alt="" /></button>
        </span>
        <nav>
          <img src="/navigationIcons/orders.svg" alt="" />
          <img src="/navigationIcons/wishlist.svg" alt="" />
          <img src="/navigationIcons/profile.svg" alt="" />
          <img src="/navigationIcons/shoppingCart.svg" alt="" />
        </nav>
      </div>
      <nav>
        <ul>
          <li><a href='#'>TODAS AS CATEGORIAS</a></li>
          <li><a href='#'>SUPERMERCADO</a></li>
          <li><a href='#'>LIVROS</a></li>
          <li><a href='#'>MODA</a></li>
          <li><a href='#'>LANÇAMENTOS</a></li>
          <li><a href='#'><strong>OFERTAS DO DIA</strong></a></li>
          <li><img src="/navigationIcons/crownSimple.svg" alt="" /><a href='#'>ASSINATURA</a></li>
        </ul>
      </nav>
    </header>
  )
}