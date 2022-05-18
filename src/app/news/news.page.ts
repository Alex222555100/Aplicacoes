import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

public news = [
  {title:"Harpies Feather Duster volta a 3", description: "Após vários anos na limitedlist, esta carta broken volta a 3 e faz 90 milhões de pessoas desistirem", subtitle: "Nunca antes visto!!", image:"https://cdn.shopify.com/s/files/1/0515/0189/1783/products/3f947195-ac0d-5d17-8305-603eece1c1f3_800x.png?v=1630718119"},
  {title: "Eldlich banido em MasterDuel e TCG, José Dias chocado", description: "Jogador mais cancro de Eldlich desinstala a vida", subtitle: "Notícia de ultima hora!!", image:"https://static.cardmarket.com/img/c39d0c30bf07466ae9d094546c0752f3/items/5/MGED/582277.jpg"},
  {title: "Cyber dragons vencem YCS 2022!!", description: "Após uma grande final contra Prank-Kids, Cyber dragons tornam-se o melhor deck do formato", subtitle: "Finalmente!!", image:"https://www.desktophut.com/wp-content/uploads/2022/03/Cyber-Dragon-Infinity-Yugioh-Master-Duel-Live-Desktop/Cyber-Dragon-Infinity-Yugioh-Master-Duel-Live-Desktop_thumbnail.jpg"}
];
  constructor() { }

  ngOnInit() {
  }

}
