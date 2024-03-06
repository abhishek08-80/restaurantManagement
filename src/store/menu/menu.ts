import slugify from "slugify";
import menuSchema from "../../model/menu/menu";
import restaurantSchema from "../../model/restaurant/restaurant";
import category from "../../model/category/category";

async function validRestaurant(req: any, res: any) {
  try {
    const { restaurantId }: any = req.body;
    const restaurant: any = await restaurantSchema.Restaurant.findByPk(restaurantId);
    if (restaurant) {
      return restaurant; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function validCategory(req: any, res: any) {
  try {
    const category: string = req.params.category;
    const validCategory: any = await menuSchema.menu.findOne({
      where: {
        category: category
      }
    });
    if (validCategory) {
      return validCategory; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function validCategoryByBody(req: any, res: any) {
  try {
    const { category }: any = req.body
    const validCategory: any = await menuSchema.menu.findOne({
      where: {
        category: category
      }
    });
    if (validCategory) {
      return validCategory; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function findMenu(req: any, res: any) {
  try {
    const { name, restaurantId }: any = req.body
    const slug: string = slugify(name, { lower: true })

    const existingMenu: any = await menuSchema.menu.findOne({
      where: {
        slug: slug, restaurantId: restaurantId
      }
    });
    console.log(existingMenu)
    if (existingMenu) {
      return existingMenu;
    }
    return null;
  } catch (error) {
    throw error;
  }
}


async function createMenu(req: any, res: any) {
  try {
    const { name }: any = req.body;
    const slug: string = slugify(name, { lower: true })


    req.body.slug = slug
    const newMenu: any = await menuSchema.menu.create(req.body);
    return newMenu;


  } catch (error) {
    throw error;
  }
};


async function getMenuByCat(req: any, res: any) {
  try {
    const category: string = req.params.category
    const menu = await menuSchema.menu.findAll({
      limit: 2,
      where: {
        category: category
      }
    })
    return menu
  } catch (error) {
    throw error;
  }
}
async function getByMenuId(req: any, res: any) {
  try {
    const menuId: number = req.params.id

    console.log(menuId)
    const validMenuId = await menuSchema.menu.findByPk(menuId)
    return validMenuId
  } catch (error) {
    throw error;
  }
}
async function getByMenuIdByBody(req: any, res: any) {
  try {
    const { menuId }: any = req.body

    const menu = await menuSchema.menu.findByPk(menuId)
    return menu
  } catch (error) {
    throw error;
  }
}
async function validMenu(req: any, res: any) {
  try {
    const { menuId }: any = req.body;
    const menu: any = await menuSchema.menu.findByPk(menuId);
    if (menu) {
      return menu; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function menuByName(req: any, res: any) {
  try {
    const name: string = req.query.name
    console.log(name)
    const slug: string = slugify(name, { lower: true })
    const menu = await menuSchema.menu.findOne({
      where: {
        slug: slug
      }
    })
    return menu
  } catch (error) {
    throw error;
  }
}


async function menuByDesc(req: any, res: any) {
  try {
    const description: string = req.params.description
    console.log(description)
    const menu = await menuSchema.menu.findOne({
      where: {
        description: description
      }
    })
    return menu
  } catch (error) {
    throw error;
  }
}

async function getMenuAndDelete(req: any, res: any) {
  try {
    const id: number = req.params.id

    const menu = await menuSchema.menu.destroy({
      where: {
        id: id
      }
    })
    return menu
  } catch (error) {
    throw error;
  }
}

async function updateMenuItem(req: any, res: any) {
  try {
    const data: any = req.body;
    const menuId: number = req.params.id
    const slug: string = slugify(data.name, { lower: true })


    req.body.slug = slug
    const updateMenu: any = await menuSchema.menu.findByPk(menuId)
    updateMenu.update(data);
    return data


  } catch (error) {
    throw error;
  }
};

export {
  createMenu,
  findMenu,
  validRestaurant,
  validCategory,
  getMenuByCat,
  validMenu,
  getByMenuId,
  menuByName,
  menuByDesc,
  getMenuAndDelete,
  updateMenuItem,
  validCategoryByBody,
  getByMenuIdByBody
}

