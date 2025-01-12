
// src/Redux/slices/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic cheese pizza with fresh basil.',
      price: 199,
      image: 'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-margherita-pizza-1611491820.jpg',
      inCart: false,
    },
    {
      id: 2,
      name: 'Vegan Burger',
      description: 'Plant-based patty with fresh veggies.',
      price: 299,
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg',
      inCart: false,
    },
    {
      id: 3,
      name: 'Spaghetti Bolognese',
      description: 'Pasta with rich meat sauce.',
      price: 349,
      image: 'https://www.rizzoni-italiano.com/wp-content/uploads/2020/02/Spaghetti-Bolognese-1536x1024.jpg',
      inCart: false,
    },
    {
      id: 4,
      name: 'Caesar Salad',
      description: 'Crisp lettuce with creamy dressing.',
      price: 149,
      image: 'https://wallpapercave.com/wp/wp3063146.jpg',
      inCart: false,
    },
    {
      id: 5,
      name: 'Chicken Tikka',
      description: 'Tender chicken marinated in spices.',
      price: 399,
      image: 'https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Chicken-Tikka-Skewers-square-FS-77.jpg',
      inCart: false,
    },
    {
      id: 6,
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls and sashimi.',
      price: 499,
      image: 'https://img.lovepik.com/photo/20211130/medium/lovepik-sushi-picture_501272791.jpg',
      inCart: false,
    },
    {
      id: 7,
      name: 'Veg Steam Momos',
      description: 'Soft steamed dumplings with sauce.',
      price: 199,
      image: 'https://th.bing.com/th/id/R.b1c710afc5d0dcafdf2972e1dbb881ef?rik=TOnsRJ1cTak8TA&riu=http%3a%2f%2fs3-ap-southeast-1.amazonaws.com%2fasia.urbanpiper.com%2fmedia%2fbizmedia%2f2020%2f11%2f05%2fDarjeeling_Momo_Veg.JPG&ehk=kaPDUsRAGsUk589KbqzKyG2GMCdtQrG1%2bWpFZNgMO70%3d&risl=&pid=ImgRaw&r=0',
      inCart: false,
    },
    {
      id: 8,
      name: 'Steak',
      description: 'Juicy grilled steak with sides.',
      price: 899,
      image: 'https://th.bing.com/th/id/R.186af74d1f319c206e893d6b14cf26ca?rik=8AaWD8z1HTYUIg&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fBeef-steak-Widescreen.jpeg&ehk=%2fj4F1mEXITb8GURPT4NwWZanUYtrn1IJgZp2VqiSxDY%3d&risl=&pid=ImgRaw&r=0',
      inCart: false,
    },
    {
      id: 9,
      name: 'Pancakes',
      description: 'Fluffy pancakes with syrup.',
      price: 169,
      image: 'https://th.bing.com/th/id/OIP.TshqezWch9U0r6xF5byeHwHaEo?rs=1&pid=ImgDetMain',
      inCart: false,
    },
  ],
  reducers: {
    addMenuItem: (state, action) => {
      const item = state.find((menuItem) => menuItem.id === action.payload.id);
      if (item) {
        item.inCart = true;
      }
    },
    updateMenuItem: (state, action) => {
      const { id, name, description, price, image } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.name = name;
        item.description = description;
        item.price = price;
        item.image = image;
      }
    },
  },
});

export const { addMenuItem, updateMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
