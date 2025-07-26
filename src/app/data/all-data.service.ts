import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  allpopular: any[] = [];
  allCategory: any[] = [];
  alldrink: any[] = [];
  constructor() {
    this.allpopular = [
      {
        id: 1,
        title: 'Chicken',
        
        contain: 'The Best Indian Chicken Recipes, all in one Place! These dishes are so easy that anyone can make and every one will love.In this page, we bring to you better than restaurant quality authentic Indian chicken dishes that are a staple in the Indian restaurants and homes.',
        blend:'This chicken seasoning is a dry mix of herbs and spices that adds a unique zing to any chicken dish. It has just the right amount of heat and flavor to make your guests beg for more. Dont be scared by the long ingredient list; most of it is spices you probably have in your cupboard. Note that this also gives chili a great flavor without adding too much heat.',
        css: 'inline-block',
        Rname1:'Alison B.',
        Rdata1:'“Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.”',
        Rname2:'Kristine R.',
        Rdata2:'“This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”',
        Rname3:'Eric T.',
        Rdata3: '“One of the best places I’ve eaten on Cape Cod. Great cocktails, awesome.”',
        
        subtitle: 'Some data about chicken nothing less nothing more',
        image: '../../../assets/chicken.jpg',
        nonveg:'../../assets/Non_veg_symbol.svg.png',
        price: 180
      },

      {
        id: 2,
        title: 'Burger',
        contain: 'There is no better way to fuel up for all the beach days, poolside BBQs, and potlucks on your summer calendars than with a nice, juicy burger. And we are not just talking a regular ol cheeseburger, either.',
        blend:'A patty in a veggie burger can be made only with veggies, with soya, with beans/legumes or with a mix of any of these. However for this recipe I have used only veggies that are most commonly available like potatoes, carrots, peas and French beans. I made it the same way a veg cutlet is made.',
        css: 'none',
        Rname1:'Alison B.',
        Rdata1:'“Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.”',
        Rname2:'Kristine R.',
        Rdata2:'“This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”',
        Rname3:'Eric T.',
        Rdata3: '“One of the best places I’ve eaten on Cape Cod. Great cocktails, awesome.”',
        subtitle: 'Some data about Burger nothing less nothing more',
        image: '../../../assets/burger.jpeg',
        nonveg:'../../assets/Non_veg_symbol.svg.png',
        price: 50
      },

      {
        id: 3,
        title: 'Fish',
        contain: 'Loaded with important nutrients, including protein, vitamins, and Omega-3 fatty acids (which are good for the heart and the brain), fish is one of the healthiest foods to eat and is an essential Mediterranean diet ingredient.',
        blend:'This mix is based on the ingredients printed on Old Bay Seasoning tins. Old Bay Seasoning is a classic American spice blend that’s been around for more than 70 years. It was originally created for seasoning prawns (shrimp) and crab but has evolved over time into an all-purpose spice, used with everything from corn and chicken to potatoes and seafood.',
        css: 'none',
        Rname1:'Alison B.',
        Rdata1:'“Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.”',
        Rname2:'Kristine R.',
        Rdata2:'“This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”',
        Rname3:'Eric T.',
        Rdata3: '“One of the best places I’ve eaten on Cape Cod. Great cocktails, awesome.”',
        subtitle: 'Some data about Fish nothing less nothing more',
        image: '../../../assets/fish.jpeg',
        nonveg:'../../assets/Non_veg_symbol.svg.png',
        price: 350
      },

      {
        id: 4,
        title: 'Thali',
        contain: 'A thali is a large circular rimmed plate that holds smaller bowls filled with food. According to food historian K.T. Achaya A Historical Dictionary of Indian Food, the word “thali” comes from “sthali” which was not a plate, but a pot used during Vedic times to boil rice.',
        blend:'north indian thali recipe | easy & quick north indian veg thali for guest with detailed photo and video recipe. a bouquet of north indian dishes assembled and served in a traditional thali. it is perhaps one of the sought after complete and balanced meal for many indians. in this recipe i have shown, how to make quick and easy north indian thali in 40 minutes with all the basic ingredients from your kitchen.',
        css: 'none',
        Rname1:'Alison B.',
        Rdata1:'“Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.”',
        Rname2:'Kristine R.',
        Rdata2:'“This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”',
        Rname3:'Eric T.',
        Rdata3: '“One of the best places I’ve eaten on Cape Cod. Great cocktails, awesome.”',
        subtitle: 'Some data about Thali nothing less nothing more',
        image: '../../../assets/thali.jpg',
        nonveg:'../../assets/Non_veg_symbol.svg.png',
        price: 80
      },

      {
        id: 5,
        title: 'Patty',
        contain: 'Patty is a flattened product made from ground/minced meat, salt, spice, and other additives. It is also possible to prepare a patty from deboned fish mince. The product is a cohesive mass that is flattened and usually shaped into a round shape.',
        blend:'These veggie burgers from Food & Wines Kelsey Jane Youngman hit every satisfying, savory note with a hearty mix of pearl barley, chickpeas, mushrooms, and crispy panko.',
        css: 'none',
        Rname1:'Alison B.',
        Rdata1:'“Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.”',
        Rname2:'Kristine R.',
        Rdata2:'“This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”',
        Rname3:'Eric T.',
        Rdata3: '“One of the best places I’ve eaten on Cape Cod. Great cocktails, awesome.”',
        subtitle: 'Some data about Patty nothing less nothing more',
        image: '../../../assets/patty.jpeg',
        nonveg:'../../assets/Non_veg_symbol.svg.png',
        price: 100
      }
    ]

    this.allCategory = [
      {
        id: 1,
        title: 'Food',
        subtitle: 'Some data',
        image: '../../../assets/burger.svg',
        price: 150,
        bgcolor: "#bf3242"
      },

      {
        id: 2,
        title: 'Drink',
        subtitle: 'Some data',
        image: '../../../assets/cocktail.svg',
        price: 50,
        bgcolor: "#2962d5"
      },

      {
        id: 3,
        title: 'Burger',
        subtitle: 'Some data',
        image: '../../../assets/dish.svg',
        price: 50,
        bgcolor: "#cb7f07"
      },

      {
        id: 4,
        title: 'Pizza',
        subtitle: 'Some data',
        image: '../../../assets/cookies.svg',
        price: 50,
        bgcolor: "#2acd65"
      },

      {
        id: 5,
        title: 'Mexican',
        subtitle: 'Some data',
        image: '../../../assets/noodle.svg',
        price: 50,
        bgcolor: "#4a54ff"
      },

      {
        id: 6,
        title: 'Desert',
        subtitle: 'Some data',
        image: '../../../assets/pizza.svg',
        price: 50,
        bgcolor: "#e73c50"
      },

      {
        id: 7,
        title: 'Noodle',
        subtitle: 'Some data',
        image: '../../../assets/taco.svg',
        price: 50,
        bgcolor: "#37baff"
      }
    ]

    this.alldrink = [
      {
        id: 1,
        title: 'Alcohol',
        subtitle: 'Some data',
        css: 'inline-block',
        contain: 'In very small amounts, alcohol can help a person feel more relaxed or less anxious. More alcohol causes greater changes in the brain, resulting in intoxication.',
        blend:"Blending is a technique in producing wine or other alcoholic beverages such as gueuze, consisting of mixing different brews. In the case of rosé wine production, it is one of the techniques used, and involves mixing a white wine with some red wine.",
        Rname1:'Alison B.',
        Rdata1:'“If you are in the New Town at night you must go to this bar. Excellent service and everyone just sits around on big stools having a laugh. It is on the roadside so you see all the action going by. Excellent spot"',
        Rname2:'Kristine R.',
        Rdata2:'“We went to this place because of all the good comments here. However, it was a horrible place for cocktails. We ordered two drinks called "blue bucket" and "orange paradise". They were horrible, tasted no alcohol, and they are extremely expensive compared to their quality. I didnt experience any special social life here, but I will say that the drinks we ordered cant be worst."',
        Rname3:'Eric T.',
        Rdata3: '“We had some beers and cocktails with local people here. Its nice because its outside, so you can enjoy the life around”',
        image: '../../../assets/alcohol.jpg',
        price: 250
      },

      {
        id: 2,
        title: 'Coffee',
        subtitle: 'Some data',
        css: 'none',
        contain: 'You pour it without thinking (or more likely to help you start thinking) but theres a fascinating backstory behind your morning cup of coffee. Heres what goes into each cup of brewed beans',
        blend:"At its most basic level, a coffee blend combines beans from different countries or regions around the world to achieve a unique expression of flavor, acidity, and body while a single origin comes from one specific farm or cooperative.",
        Rname1:'Alison B.',
        Rdata1:'“If you are in the New Town at night you must go to this bar. Excellent service and everyone just sits around on big stools having a laugh. It is on the roadside so you see all the action going by. Excellent spot"',
        Rname2:'Kristine R.',
        Rdata2:'“We went to this place because of all the good comments here. However, it was a horrible place for cocktails. We ordered two drinks called "blue bucket" and "orange paradise". They were horrible, tasted no alcohol, and they are extremely expensive compared to their quality. I didnt experience any special social life here, but I will say that the drinks we ordered cant be worst."',
        Rname3:'Eric T.',
        Rdata3: '“We had some beers and cocktails with local people here. Its nice because its outside, so you can enjoy the life around”',
        image: '../../../assets/coffee.webp',
        price: 50
      },

      {
        id: 3,
        title: 'Cold Drink',
        subtitle: 'Some data',
        css: 'none',
        contain: 'The benefits of drinking cold water are endless. Drinking cold water can help you lose weight, hydrate your body and even boost your metabolism rate.',
        blend:"All ingredients used in soft drinks must be of high purity and food grade to obtain a quality beverage. These include the water, carbon dioxide, sugar, acids, juices, and flavours.",
        Rname1:'Alison B.',
        Rdata1:'“If you are in the New Town at night you must go to this bar. Excellent service and everyone just sits around on big stools having a laugh. It is on the roadside so you see all the action going by. Excellent spot"',
        Rname2:'Kristine R.',
        Rdata2:'“We went to this place because of all the good comments here. However, it was a horrible place for cocktails. We ordered two drinks called "blue bucket" and "orange paradise". They were horrible, tasted no alcohol, and they are extremely expensive compared to their quality. I didnt experience any special social life here, but I will say that the drinks we ordered cant be worst."',
        Rname3:'Eric T.',
        Rdata3: '“We had some beers and cocktails with local people here. Its nice because its outside, so you can enjoy the life around”',
        image: '../../../assets/cold.jpeg',
        price: 20
      },

      {
        id: 4,
        title: 'Lemonade',
        subtitle: 'Some data',
        css: 'none',
        contain: 'Lemonade is a colourless sweet fizzy drink. A drink that is made from lemons, sugar, and water and is not fizzy can also be referred to as lemonade. He was pouring ice and lemonade into tall glasses. A glass of lemonade can be referred to as a lemonade.',
        blend:"Ingredients. Sugar, Fructose, Citric Acid, Contains Less than 2% of Maltodextrin, Sodium Acid Pyrophosphate, Magnesium Oxide, Sodium Citrate, Ascorbic Acid (Vitamin C), Natural Flavor, Artificial Color, Yellow 5 Lake, Soy Lecithin, Tocopherol (Preserve Freshness).",
        Rname1:'Alison B.',
        Rdata1:'“If you are in the New Town at night you must go to this bar. Excellent service and everyone just sits around on big stools having a laugh. It is on the roadside so you see all the action going by. Excellent spot"',
        Rname2:'Kristine R.',
        Rdata2:'“We went to this place because of all the good comments here. However, it was a horrible place for cocktails. We ordered two drinks called "blue bucket" and "orange paradise". They were horrible, tasted no alcohol, and they are extremely expensive compared to their quality. I didnt experience any special social life here, but I will say that the drinks we ordered cant be worst."',
        Rname3:'Eric T.',
        Rdata3: '“We had some beers and cocktails with local people here. Its nice because its outside, so you can enjoy the life around”',
        image: '../../../assets/lemonade.jpg',
        price: 30
      },

      {
        id: 5,
        title: 'Shake',
        subtitle: 'Some data',
        css: 'none',
        contain: 'Besides drinking milk, all the milk shakes have their health benefits. Because Milkshakes can provide us with proteins, sugar, vitamins and the dietary fiber for better digestion. So obviously to have a booster to your health and fitness shakes can be rally helpful.',
        blend:"A milkshake (sometimes simply called a shake) is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit, nuts, or seeds into a thick, sweet, cold mixture.",
        Rname1:'Alison B.',
        Rdata1:'“If you are in the New Town at night you must go to this bar. Excellent service and everyone just sits around on big stools having a laugh. It is on the roadside so you see all the action going by. Excellent spot"',
        Rname2:'Kristine R.',
        Rdata2:'“We went to this place because of all the good comments here. However, it was a horrible place for cocktails. We ordered two drinks called "blue bucket" and "orange paradise". They were horrible, tasted no alcohol, and they are extremely expensive compared to their quality. I didnt experience any special social life here, but I will say that the drinks we ordered cant be worst."',
        Rname3:'Eric T.',
        Rdata3: '“We had some beers and cocktails with local people here. Its nice because its outside, so you can enjoy the life around”',
        image: '../../../assets/shake.webp',
        price: 50
      }
    ]
  }

  getpopularData() {
    return this.allpopular;
  }

  getcategorydata() {
    return this.allCategory;
  }

  getdrinkdata() {
    return this.alldrink;
  }
}
