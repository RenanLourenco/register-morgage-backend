const HOME_DECORATION_EXPENSE_NAMES = [
  'Wall paint — living room',
  'Interior latex paint',
  'Curtain rods and brackets',
  'Blackout curtains — bedroom',
  'LED ceiling fixture',
  'Pendant lamp — dining area',
  'Area rug — medium',
  'Throw pillows and covers',
  'Wallpaper installation',
  'Decorative mirror',
  'Floating shelves — wood',
  'Picture frames and mounting',
  'Crown molding materials',
  'Baseboard trim',
  'Laminate flooring planks',
  'Grout and sealant',
  'Cabinet handles — brushed nickel',
  'Drawer organizers',
  'Blinds — PVC',
  'Sheer curtains',
  'Wall sconces',
  'Table lamp — bedside',
  'Upholstery cleaning',
  'Sofa slipcover',
  'Coffee table — compact',
  'Indoor plants and pots',
  'Wall art prints',
  'Decorative vases',
  'Coat rack — hallway',
  'Entryway bench cushion',
];

/** Random expense label with home decoration / interior styling context. */
export function randomName(): string {
  const i = Math.floor(Math.random() * HOME_DECORATION_EXPENSE_NAMES.length);
  return HOME_DECORATION_EXPENSE_NAMES[i]!;
}
