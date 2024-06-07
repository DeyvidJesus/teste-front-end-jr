export function Footer() {
  return (
    <footer>
      <section>
        <div>
          <div className="about">
            <p>Sobre nós</p>
            <a href="">CONHEÇA</a>
            <a href="">COMO COMPRAR</a>
            <a href="">INDICAÇÃO E DESCONTO</a>

            <div className="socialMediaContainer">
              <a href=""><img src="/socialMediaIcons/facebook.svg" alt="" /></a>
              <a href=""><img src="/socialMediaIcons/instagram.svg" alt="" /></a>
              <a href=""><img src="/socialMediaIcons/youtube.svg" alt="" /></a>
            </div>
          </div>
          <div className="info">
            <p>INFORMAÇÕES ÚTEIS</p>
            <a href="">FALE CONOSCO</a>
            <a href="">DÚVIDAS</a>
            <a href="">PRAZOS DE ENTREGA</a>
            <a href="">FORMAS DE PAGAMENTO</a>
            <a href="">POLÍTICA DE PRIVACIDADE</a>
            <a href="">TROCAS E DEVOLUÇÕES</a>
          </div>
          <div className="payment">
            <p>FORMAS DE PAGAMENTO</p>
            <div>
              <img src="/paymentIcons/visa.svg" alt="" />
              <img src="/paymentIcons/elo.svg" alt="" />
              <img src="/paymentIcons/alelo.svg" alt="" />
              <img src="/paymentIcons/dinners.svg" alt="" />
              <img src="/paymentIcons/ifood.svg" alt="" />
              <img src="/paymentIcons/mastercard.svg" alt="" />
              <img src="/paymentIcons/pix.svg" alt="" />
              <img src="/paymentIcons/amex.svg" alt="" />
              <img src="/paymentIcons/ticket.svg" alt="" />
              <img src="/paymentIcons/sodexo.svg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h3>CADASTRE-SE E RECEBA NOSSAS <br />
            <strong>NOVIDADES E PROMOÇÕES</strong></h3>
          <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <span>
            <input type="email" name="email" id="email" placeholder="SEU E-MAIL"/>
            <button>OK</button>
          </span>
        </div>
      </section>
      <div>
        <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
        <div>
          <img src="/logos/Econverse Logo White.svg" alt="" />
          <img src="/logos/VTEX White Logo.svg" alt="" />
        </div>
      </div>
    </footer>
  )
}