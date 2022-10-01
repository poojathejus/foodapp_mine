import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tags";

export const sample_foods: Food[] =[
  {
  id:'1',
  name:'Chicken soup',
  price:200,
  tags:['Slowfood','Soup'],
  favorite:true,
  stars:4.0,
  imageUrl:'assets/food1.jpg',
  origins:['Asia'],
  cookTime:'40-50',
  },
  {
    id:'2',
    name:'Chicken Burger',
    price:250,
    tags:['Fastfood','Burger','Chicken'],
    favorite:true,
    stars:4.5,
    imageUrl:'assets/food2.jpg',
    origins:['Europe','Asia'],
    cookTime:'20-30',
    },
    {
      id:'3',
      name:'Pizza',
      price:375,
      tags:['Pizza','Fastfood'],
      favorite:false,
      stars:2.5,
      imageUrl:'assets/food3.jpg',
      origins:['Italy'],
      cookTime:'20-35',
      },
    {
      id:'4',
      name:'Beef Steak',
      price:550,
      tags:['Steak'],
      favorite:true,
      stars:4,
      imageUrl:'assets/food4.jpg',
      origins:['Italy'],
      cookTime:'35-50',
      },
    {
      id:'5',
      name:'Kunafa',
      price:300,
      tags:['Sweet','Kunafa'],
      favorite:false,
      stars:2.5,
      imageUrl:'assets/food5.webp',
      origins:['Turkey'],
      cookTime:'15-35',
      },
      {
        id:'6',
        name:'Chicken Fried Momos',
        price:150,
        tags:['Momos','Steamed','Chicken'],
        favorite:true,
        stars:4,
        imageUrl:'assets/food6.webp',
        origins:['Nepal'],
        cookTime:'20-30',
        },
        {
          id:'7',
          name:'Chicken Kebab',
          price:400,
          tags:['Kebab','Chicken'],
          favorite:true,
          stars:4.5,
          imageUrl:'assets/food7.jpg',
          origins:['Middle East'],
          cookTime:'35-45',
          }

]

export const sample_tags:Tag[]=[
  {
    name:'All',
    count:7
  },
  {
    name:'Soup',
    count:1
  },
  {
    name:'Burger',
    count:1
  },
  {
    name:'Sweet',
    count:1
  },
  {
    name:'Momos',
    count:1
  },
  {
    name:'Chicken',
    count:3
  }
]
