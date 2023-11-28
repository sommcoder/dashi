// import sql from "../db/db-instance.js";

// const dataArr = [
//   {
//     id: 1,
//     title: "Château de la Tour",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 25.8,
//     gl_code_id: "5012",
//     description:
//       "A rich and velvety red wine with notes of dark berries and oak.",
//     created_by: "Brian",
//     added_on: "12/05/2023",
//     avg_price: 47.3265789432,
//     unit_size: 750,
//   },
//   {
//     id: 2,
//     title: "Crimson Elegance",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 35.4,
//     gl_code_id: "5012",
//     description:
//       "An elegant red blend with hints of cherry and a smooth finish.",
//     created_by: "Tawnya",
//     added_on: "08/09/2023",
//     avg_price: 63.2410590827,
//     unit_size: 25.35,
//   },
//   {
//     id: 3,
//     title: "Golden Harvest Reserve",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 18.75,
//     gl_code_id: "5012",
//     description: "A reserve white wine with notes of honey and citrus.",
//     created_by: "Brian",
//     added_on: "14/02/2023",
//     avg_price: 32.5869401523,
//     unit_size: 750,
//   },
//   {
//     id: 4,
//     title: "Midnight Velvet",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 42.2,
//     gl_code_id: "5012",
//     description:
//       "A bold red wine with flavors of black currant and a velvety texture.",
//     created_by: "Tawnya",
//     added_on: "21/11/2023",
//     avg_price: 78.9154738472,
//     unit_size: 25.35,
//   },
//   {
//     id: 5,
//     title: "Enchanting Zephyr",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 29.6,
//     gl_code_id: "5012",
//     description:
//       "An enchanting white wine with floral aromas and a crisp finish.",
//     created_by: "Brian",
//     added_on: "03/04/2023",
//     avg_price: 52.870190234,
//     unit_size: 750,
//   },
//   {
//     id: 6,
//     title: "Silken Symphony",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 38.25,
//     gl_code_id: "5012",
//     description:
//       "A symphony of red and black fruit flavors in this smooth red blend.",
//     created_by: "Tawnya",
//     added_on: "17/07/2023",
//     avg_price: 71.1537394621,
//     unit_size: 25.35,
//   },
//   {
//     id: 7,
//     title: "Mystic Moonlight Blend",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 21.9,
//     gl_code_id: "5012",
//     description:
//       "A mysterious blend of red and white wines with notes of moonlit berries.",
//     created_by: "Brian",
//     added_on: "28/01/2023",
//     avg_price: 37.5379814972,
//     unit_size: 750,
//   },
//   {
//     id: 8,
//     title: "Velvet Elegance Reserve",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 30.1,
//     gl_code_id: "5012",
//     description:
//       "An elegant reserve red wine with velvety tannins and a long finish.",
//     created_by: "Tawnya",
//     added_on: "10/06/2023",
//     avg_price: 54.8546928394,
//     unit_size: 25.35,
//   },
//   {
//     id: 9,
//     title: "Gilded Amber Essence",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 27.25,
//     gl_code_id: "5012",
//     description:
//       "A golden amber wine with rich, honeyed notes and a touch of spice.",
//     created_by: "Brian",
//     added_on: "19/09/2023",
//     avg_price: 49.3697268491,
//     unit_size: 750,
//   },
//   {
//     id: 10,
//     title: "Celestial Nectar",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 44.5,
//     gl_code_id: "5012",
//     description:
//       "A celestial blend of red and white wines with a burst of tropical fruit flavors.",
//     created_by: "Tawnya",
//     added_on: "05/12/2023",
//     avg_price: 80.0,
//     unit_size: 25.35,
//   },
//   {
//     id: 11,
//     title: "Ethereal Ruby Elixir",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 16.6,
//     gl_code_id: "5012",
//     description:
//       "An ethereal red wine with ruby hues and a delicate, floral aroma.",
//     created_by: "Brian",
//     added_on: "22/02/2023",
//     avg_price: 29.7852397436,
//     unit_size: 750,
//   },
//   {
//     id: 12,
//     title: "Opulent Twilight",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 35.5,
//     gl_code_id: "5012",
//     description:
//       "An opulent red wine with hints of dark chocolate and a velvety finish.",
//     created_by: "Tawnya",
//     added_on: "11/07/2023",
//     avg_price: 63.9654722345,
//     unit_size: 25.35,
//   },
//   {
//     id: 13,
//     title: "Luminous Vintage Charm",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 22.7,
//     gl_code_id: "5012",
//     description:
//       "A luminous white wine with vintage charm, featuring notes of orchard fruits.",
//     created_by: "Brian",
//     added_on: "30/04/2023",
//     avg_price: 41.1158674536,
//     unit_size: 750,
//   },
//   {
//     id: 14,
//     title: "Radiant Dusk Velvet",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 30.0,
//     gl_code_id: "5012",
//     description:
//       "A radiant red wine with velvety textures and flavors of dusk-ripened berries.",
//     created_by: "Tawnya",
//     added_on: "14/10/2023",
//     avg_price: 54.4467267981,
//     unit_size: 25.35,
//   },
//   {
//     id: 15,
//     title: "Whispering Willow Essence",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 19.15,
//     gl_code_id: "5012",
//     description:
//       "A whispering white wine with essence and delicate notes of willow blossoms.",
//     created_by: "Brian",
//     added_on: "01/03/2023",
//     avg_price: 33.413598736,
//     unit_size: 750,
//   },
//   {
//     id: 16,
//     title: "Nocturnal Elegance Reserve",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 47.75,
//     gl_code_id: "5012",
//     description:
//       "A reserve red wine with nocturnal elegance, featuring bold dark fruit flavors.",
//     created_by: "Tawnya",
//     added_on: "09/08/2023",
//     avg_price: 80.0,
//     unit_size: 25.35,
//   },
//   {
//     id: 17,
//     title: "Serene Sable Symphony",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 26.95,
//     gl_code_id: "5012",
//     description:
//       "A serene red wine symphony with sable hues and harmonious fruit notes.",
//     created_by: "Brian",
//     added_on: "26/05/2023",
//     avg_price: 48.8892418547,
//     unit_size: 750,
//   },
//   {
//     id: 18,
//     title: "Velvet Twilight Essence",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 38.8,
//     gl_code_id: "5012",
//     description:
//       "A velvety red wine with twilight essence, featuring notes of blackberries and vanilla.",
//     created_by: "Tawnya",
//     added_on: "19/01/2023",
//     avg_price: 70.0539938748,
//     unit_size: 25.35,
//   },
//   {
//     id: 19,
//     title: "Golden Cascade Elixir",
//     case_size: 6,
//     inventoriable: true,
//     uom: "ml",
//     unit_cost: 29.4,
//     gl_code_id: "5012",
//     description:
//       "A golden elixir of white wine with cascading flavors of orchard fruits.",
//     created_by: "Brian",
//     added_on: "12/06/2023",
//     avg_price: 53.0619815042,
//     unit_size: 750,
//   },
//   {
//     id: 20,
//     title: "Crimson Echo Elixir",
//     case_size: 12,
//     inventoriable: false,
//     uom: "fl. oz",
//     unit_cost: 40.0,
//     gl_code_id: "5012",
//     description:
//       "An echo of crimson in this elixir, featuring rich red fruit flavors and a lingering finish.",
//     created_by: "Tawnya",
//     added_on: "04/09/2023",
//     avg_price: 72.4862015369,
//     unit_size: 25.35,
//   },
// ];

// async function addItems({
//   id,
//   title,
//   case_size,
//   inventoriable,
//   uom,
//   cost,
//   gl_code,
//   description,
//   created_by,
//   added_on,
//   avg_price,
//   unit_size,
// }) {
//   const newReport = await sql`INSERT INTO dashi_item
//         (id, title, case_size, inventoriable, uom, cost, gl_code, description, created_by, added_on, avg_price, unit_size)
//         VALUES (${id}, ${title}, ${case_size}, ${inventoriable}, ${uom}, ${cost}, ${gl_code}, ${description}, ${created_by}, ${added_on}, ${avg_price}, ${unit_size});
//         `;
// }

// for (let i = 0; i < dataArr.length; i++) {
//   addItems(dataArr[i]);
// }

// // async function addItem() {
// //   try {
// //     // will this populate the table?
// //     item_data_arr.forEach(({id, title, case_size, inventoriable, uom, cost, gl_code, description, created_by, added_on, avg_price, unit_size}) => {
// //       const newReport = await sql`INSERT INTO dashi_item
// //         (id, title, case_size, inventoriable, uom, cost, gl_code, description, created_by, added_on, avg_price, unit_size)
// //         VALUES (${id}, ${title}, ${case_size}, ${inventoriable}, ${uom}, ${cost}, ${gl_code}, ${description}, ${created_by}, ${added_on}, ${avg_price}, ${unit_size});
// //         `;
// //     });
// //     setTimeout(() => query.cancel(), 5000);
// //     return newReport;
// //   } catch (err) {
// //     console.log("error:", err.message);
// //   }
// // }
