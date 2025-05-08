export const filterOptions = {
    makes: ["Audi", "BMW", "Honda", "Mercedes-Benz", "Tesla", "Toyota"],
    models: {
      Honda: ["City", "Accord", "Civic", "CR-V"],
      Toyota: ["Corolla", "Camry", "Land Cruiser", "RAV4"],
      BMW: ["3 Series", "5 Series", "X3", "X5", "X7"],
      Nissan: ["Patrol", "Altima", "X-Trail", "Pathfinder"],
      "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
      Lexus: ["ES", "GX460", "RX", "LX", "IS"],
    },
    trims: {
      City: ["LX", "EX", "DX"],
      Corolla: ["LE", "XLE", "SE"],
      X5: ["xDrive40i", "M50i", "xDrive45e"],
      Patrol: ["XE", "SE", "LE", "Platinum"],
      "C-Class": ["C200", "C300", "AMG C43"],
      GX460: ["Premium", "Platinum", "Sport", "Luxury"],
    },
    years: Array.from({ length: 11 }, (_, i) => 2015 + i),
    priceRanges: [
      { min: 0, max: 50000 },
      { min: 50001, max: 100000 },
      { min: 100001, max: 200000 },
      { min: 200001, max: 500000 },
    ],
    kilometerRanges: [
      { min: 0, max: 20000 },
      { min: 20001, max: 60000 },
      { min: 60001, max: 100000 },
      { min: 100001, max: 150000 },
    ],
    sellerTypes: ["direct", "dealer", "auction"],
    colors: ["Black", "White", "Silver", "Gray", "Red", "Blue", "White Pearl", "Nebula Gray"],
  };