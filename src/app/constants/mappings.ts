export const TYPE_COLORS = {
    bug: '#B1C12E',
    dark: '#4F3A2D',
    dragon: '#755EDF',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#823551D',
    fire: '#E73B0C',
    flying: '#A3B3F7',
    ghost: '#6060B2',
    grass: '#74C236',
    ground: '#D3B357',
    ice: '#A3E7FD',
    normal: '#C8C4BC',
    poison: '#934594',
    psychic: '#ED4882',
    rock: '#B9A156',
    steel: '#B5B5C3',
    water: '#3295F6'
  };

  export const PRODUCT_FORM_DEFAULT = {
    name: 'Pokemon Cloth',
    description: 'Pokemon cloth for pokemon',
    price: '10.00',
    category: 'Cloth',
    image: 'https://cdn.shopify.com/s/files/1/1130/2850/products/2016-new-children-t-shirt-pokemon-go-shirt-kids-girls-tops-shirts-clothing-t-shirt-boy_1200x1200.jpg',
    phone: '8908908909',
    type: 'Mobile'
}

export const POKEMON_LIST_CONST = {
  noOfListItems: 30
}

export const URLS = {
  pokemonImageUrl: ''
}

export const VALIDATION_MESSAGES = {
  'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be greater than 2 characters.',
      'pattern': 'Name must contain only alphabets and numbers.'
  },
  'description': {
      'required': 'Description is required.',
      'minlength': 'Description must be greater than 2 characters.',
      'pattern': 'Description must contain only alphabets and numbers.'
  },
  'price': {
      'required': 'Price is required.',
      'pattern': 'Price must contain 2 decimal places.'
  },
  'category': {
      'required': 'Category is required.',
  },
  'image': {
      'required': 'ImageUrl is required.',
      'pattern': 'ImageUrl must be valid.'
  },
  'phone': {
      'required': 'Phone is required.',
      'pattern': 'Phone must contain digits only.',
      'maxlength': 'Phone can not be greater than 10'
  }
}