import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 79,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike Revolution 5 Masculino</strong>
        <span>R$ 229,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/02/D22-3195-002/D22-3195-002_zoom2.jpg?ts=1571247200&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Olympikus Breed 2</strong>
        <span>R$ 89,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-levity-feminino/93/D22-3592-793/D22-3592-793_zoom2.jpg?ts=1579612079&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Olympikus Levity Feminino</strong>
        <span>R$ 99,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-feminino/31/D24-1739-531/D24-1739-531_zoom2.jpg?ts=1591165250&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Kappa Impact Feminino</strong>
        <span>R$ 59,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
