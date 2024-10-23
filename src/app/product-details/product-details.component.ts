import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  products = [
    {
      id: 1,
      name: 'Camiseta Branca',
      price: 50.00,
      description: 'A Camiseta Branca é um item essencial para qualquer guarda-roupa. Confeccionada em 100% algodão, ela proporciona conforto e respirabilidade, perfeita para o uso diário. Seu design clássico com um corte moderno a torna versátil, permitindo que você a combine facilmente com qualquer peça. Ideal para um look casual ou para ser utilizada como base para camadas, a camiseta branca é um must-have para todas as ocasiões.',
      imageUrl: 'assets/camiseta-branca.jpg'
    },
    {
      id: 2,
      name: 'Calça Jeans',
      price: 120.00,
      description: 'A Calça Jeans é a escolha perfeita para quem busca conforto e estilo. Com um corte ajustado e tecido elástico, ela se adapta ao seu corpo, proporcionando liberdade de movimento. Disponível em várias lavagens, desde o clássico azul até opções mais modernas, esta calça é perfeita para compor looks casuais ou mais arrumados. Combine com uma camiseta ou uma blusa elegante para um visual despojado e sofisticado.',
      imageUrl: 'assets/calca-jeans.jpg'
    },
    {
      id: 3,
      name: 'Meia',
      price: 50.00,
      description: 'As Meias são um acessório indispensável no dia a dia. Confeccionadas com uma mistura de algodão macio e poliéster, garantem conforto e durabilidade. Disponíveis em diversas cores e estampas, elas adicionam um toque de estilo ao seu look. Seja para usar no dia a dia ou para complementar uma roupa esportiva, as meias são versáteis e funcionais, mantendo seus pés aquecidos e confortáveis.',
      imageUrl: 'assets/Meia.jpg'
    },
    {
      id: 4,
      name: 'Blusa de Frio',
      price: 1200.00,
      description: 'A Blusa de Frio é perfeita para aqueles dias mais gelados. Feita com uma mistura de lã e poliéster, ela oferece aquecimento e aconchego. Seu design elegante e moderno pode ser usado em diversas ocasiões, desde passeios informais até eventos mais sofisticados. Com um corte que valoriza a silhueta, a blusa de frio é uma peça chave para enfrentar o inverno com estilo e conforto.',
      imageUrl: 'assets/blusa-frio.jpg'
    },
    {
      id: 5,
      name: 'regata',
      price: 79.00,
      description: 'A Regata é uma peça leve e arejada, ideal para os dias quentes. Confeccionada em tecido de algodão, ela proporciona conforto e respirabilidade. Com um design simples e elegante, a regata pode ser usada sozinha ou como parte de camadas. Combine-a com shorts, saias ou calças jeans para um look descontraído e estiloso, perfeito para passeios ao ar livre ou para uma tarde relaxante.',
      imageUrl: 'assets/regata.jpg'
    },
    {
      id: 6,
      name: 'Tênis',
      price: 589.00,
      description: 'O Tênis é a escolha ideal para quem valoriza conforto sem abrir mão do estilo. Confeccionado com materiais de alta qualidade, ele oferece suporte e durabilidade para o uso diário. Com um design moderno e versátil, este tênis pode ser combinado com uma variedade de roupas, desde looks casuais até esportivos. Seja para um passeio no parque ou para o dia a dia na cidade, o tênis é a escolha perfeita para qualquer ocasião.',
      imageUrl: 'assets/Tenis.jpg'
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }
}
