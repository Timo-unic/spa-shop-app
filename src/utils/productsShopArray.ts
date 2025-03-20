export interface ICategoryProductProps {
    id: number
    name: string
    image: string
    description?: string
    products: Array<IProductProps>
}

export interface IProductProps {
    id: number
    name: string
    image: string
    description?: string
    variations: Array<IVariationProps>;
}

export interface IVariationProps {
    attributes:Record<string, string> 
    price: number
    quantity: number
}

const productsShopArray: ICategoryProductProps[] = [
    {
      id: 1,
      name: 'ceramics',
      image: 'ceramics.jpg',
      description: 'Beautiful ceramics for your home.',
      products: [
        {
          id: 101,
          name: 'Ceramic creamer',
          image: '/images/product-creamer.jpg',
          description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
          variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
          ]
        },
        {
            id: 102,
            name: 'Ceramic plates',
            image: '/images/product-plates.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
          ]
          },
          {
            id: 103,
            name: 'Ceramic bowls',
            image: '/images/product-bowls.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
          ]
          },
          {
            id: 104,
            name: 'Ceramic birds',
            image: '/images/product-ceramic_birds.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
          ]
          },
          {
            id: 105,
            name: 'Ceramic mug',
            image: '/images/product-ceramic_mug.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
          ]
          },
          {
            id: 106,
            name: 'Ceramic pot',
            image: '/images/product-ceramic_pot.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
          ]
          },
      ]
    },
    {
        id: 2,
        name: 'jewels',
        image: 'jewels.jpg',
        description: 'Beautiful jewels for you.',
        products: [
          {
            id: 201,
            name: 'Handmade man necklace',
            image: '/images/product-necklace.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
          ]
          },
          {
              id: 202,
              name: 'Seashell earrings',
              image: '/images/product-seashell.jpg',
              description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
              variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
              ]
            },
            {
              id: 203,
              name: 'Pearl and gold earrings',
              image: '/images/product-pear&gold.jpg',
              description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
              variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
              ]
            },
            {
              id: 204,
              name: 'Handmade necklace',
              image: '/images/product-handmade_necklace.jpg',
              description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
              variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
              ]
            },
            {
              id: 205,
              name: 'Man necklace',
              image: '/images/product-man_necklace.jpg',
              description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
              variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
              ]
            },
            {
              id: 206,
              name: 'Wood ring',
              image: '/images/product-wood_ring.jpg',
              description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
              variations: [
            { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
            { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
            { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
            { attributes:{material: 'Gold', size: '35cm' }, price: 80, quantity: 7 },
            { attributes:{material: 'Gold', size: '40cm' }, price: 85, quantity: 6 },
            { attributes:{material: 'Gold', size: '45cm' }, price: 90, quantity: 4 },
            { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
            { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
            { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
              ]
            },
        ]
      },
      {
        id: 3,
        name: 'decor',
        image: 'decor.jpg',
        description: 'Beautiful decorations for you.',
        products: [
          {
            id: 301,
            name: 'Christmas ornaments #1',
            image: '/images/product-christmas_ornaments-1.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
              { attributes:{pack: '2pcks', color: 'blue'}, price: 15, quantity: 10 },
              { attributes:{pack: '3pcks', color: 'blue'}, price: 20, quantity: 8 },
              { attributes:{pack: '4pcks', color: 'blue'}, price: 25, quantity: 5 },
              { attributes:{pack: '2pcks', color: 'gold'}, price: 15, quantity: 6 },
              { attributes:{pack: '3pcks', color: 'gold'}, price: 20, quantity: 4 },
              { attributes:{pack: '4pcks', color: 'gold'}, price: 25, quantity: 7 },
              { attributes:{pack: '2pcks', color: 'purple'}, price: 15, quantity: 9 },
              { attributes:{pack: '3pcks', color: 'purple'}, price: 20, quantity: 7 },
              { attributes:{pack: '4pcks', color: 'purple'}, price: 25, quantity: 3 }
            ]
          },
          {
              id: 302,
              name: 'Christmas ornaments #2',
              image: '/images/product-christmas_ornaments-2.jpg',
              description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
              variations: [
              { attributes:{pack: '2pcks', color: 'blue'}, price: 15, quantity: 10 },
              { attributes:{pack: '3pcks', color: 'blue'}, price: 20, quantity: 8 },
              { attributes:{pack: '4pcks', color: 'blue'}, price: 25, quantity: 5 },
              { attributes:{pack: '2pcks', color: 'gold'}, price: 15, quantity: 6 },
              { attributes:{pack: '3pcks', color: 'gold'}, price: 20, quantity: 4 },
              { attributes:{pack: '4pcks', color: 'gold'}, price: 25, quantity: 7 },
              { attributes:{pack: '2pcks', color: 'purple'}, price: 15, quantity: 9 },
              { attributes:{pack: '3pcks', color: 'purple'}, price: 20, quantity: 7 },
              { attributes:{pack: '4pcks', color: 'purple'}, price: 25, quantity: 3 }
            ]
            },
            {
              id: 303,
              name: 'Christmas ornaments #3',
              image: '/images/product-christmas_ornaments-3.jpg',
              description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
              variations: [
              { attributes:{pack: '2pcks', color: 'blue'}, price: 15, quantity: 10 },
              { attributes:{pack: '3pcks', color: 'blue'}, price: 20, quantity: 8 },
              { attributes:{pack: '4pcks', color: 'blue'}, price: 25, quantity: 5 },
              { attributes:{pack: '2pcks', color: 'gold'}, price: 15, quantity: 6 },
              { attributes:{pack: '3pcks', color: 'gold'}, price: 20, quantity: 4 },
              { attributes:{pack: '4pcks', color: 'gold'}, price: 25, quantity: 7 },
              { attributes:{pack: '2pcks', color: 'purple'}, price: 15, quantity: 9 },
              { attributes:{pack: '3pcks', color: 'purple'}, price: 20, quantity: 7 },
              { attributes:{pack: '4pcks', color: 'purple'}, price: 25, quantity: 3 }
            ]
            },
        ]
      },
      {
        id: 4,
        name: 'candles',
        image: 'candles.jpg',
        description: 'Beautiful candles for your home.',
        products: [
          {
            id: 401,
            name: 'Large candle',
            image: '/images/product-large.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
              { attributes:{pack: '2pcks'}, price: 10, quantity: 10 },
              { attributes:{pack: '3pcks'}, price: 15, quantity: 8 },
              { attributes:{pack: '4pcks'}, price: 20, quantity: 5 }
            ]
          },
          {
            id: 402,
            name: 'Scented candles',
            image: '/images/product-scented.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
                { attributes:{material: 'Silver', size: '35cm'}, price: 40, quantity: 10 },
                { attributes:{material: 'Silver', size: '40cm'}, price: 45, quantity: 8 },
                { attributes:{material: 'Silver', size: '45cm'}, price: 50, quantity: 5 },
                { attributes:{material: 'Gold', size: '35cm'}, price: 80, quantity: 7 },
                { attributes:{material: 'Gold', size: '40cm'}, price: 85, quantity: 6 },
                { attributes:{material: 'Gold', size: '45cm'}, price: 90, quantity: 4 },
                { attributes:{material: 'Platinum', size: '35cm'}, price: 60, quantity: 9 },
                { attributes:{material: 'Platinum', size: '40cm'}, price: 65, quantity: 7 },
                { attributes:{material: 'Platinum', size: '45cm'}, price: 70, quantity: 3 }
            ]
          },
          {
            id: 403,
            name: 'Eucalyptus candle',
            image: '/images/product-eucalyptus.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
              { attributes:{}, price: 12, quantity: 10 }
            ]
          },
        ]
      },
      {
        id: 5,
        name: 'plants',
        image: 'plants.jpg',
        description: 'Beautiful plants for your garden.',
        products: [
          {
            id: 501,
            name: 'Tropical plant',
            image: '/images/product-tropical.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
                { attributes:{}, price: 25, quantity: 10 }
              ]
          },
          {
            id: 502,
            name: 'Small terrarium',
            image: '/images/product-smterrarium.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
                { attributes:{}, price: 20, quantity: 10 }
              ]
          },
          {
            id: 503,
            name: 'Small plant',
            image: '/images/product-smplant.jpg',
            description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            variations: [
              { attributes:{}, price: 15, quantity: 10 }
            ]
          }, 
          // інші продукти для категорії Ceramics
        ]
      },
    // інші категорії
  ];

  export const getProductsShopObject = (array: ICategoryProductProps[]) => 
    array.reduce((object, product) => ({...object, [product.id]:product}),{})

  export default productsShopArray;