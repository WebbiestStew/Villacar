export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: 'New' | 'Used' | 'Certified';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible' | 'Hatchback';
  color: string;
  description: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  vin: string;
  status?: 'Available' | 'Sale Pending' | 'Sold' | 'Coming Soon';
}

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry SE',
    year: 2024,
    price: 32450,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Blueprint',
    description: 'The Toyota Camry SE combines reliability with sporty styling. This best-selling sedan offers excellent fuel economy, advanced safety features, and a comfortable ride.',
    features: [
      'Apple CarPlay & Android Auto',
      'Toyota Safety Sense 3.0',
      'Sport-Tuned Suspension',
      '8-Inch Touchscreen',
      'Dual-Zone Climate Control',
      'LED Headlights',
      'Keyless Entry & Start'
    ],
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-cf8a7d3f3a95?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617531653520-bd466c5d6e85?w=800&h=600&fit=crop'
    ],
    isFeatured: true,
    vin: 'TOYOTA12345CAMRY'
  },
  {
    id: '2',
    make: 'Nissan',
    model: 'Rogue SV',
    year: 2024,
    price: 34290,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Scarlet Ember',
    description: 'The Nissan Rogue SV is a versatile compact SUV perfect for families. With plenty of cargo space, advanced safety tech, and comfortable seating, it\'s ready for any adventure.',
    features: [
      'ProPILOT Assist',
      'Nissan Safety Shield 360',
      'Panoramic Moonroof',
      'Heated Front Seats',
      'Tri-Zone Climate Control',
      'Motion Activated Liftgate',
      '9-Inch Touchscreen'
    ],
    images: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop'
    ],
    isFeatured: true,
    vin: 'NISSAN789ROGUE'
  },
  {
    id: '3',
    make: 'GMC',
    model: 'Sierra 1500 SLE',
    year: 2023,
    price: 48950,
    mileage: 15400,
    condition: 'Used',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Truck',
    color: 'Onyx Black',
    description: 'This GMC Sierra 1500 SLE is a reliable workhorse with low miles. Perfect for both work and play, it offers impressive towing capacity and a comfortable cabin.',
    features: [
      '5.3L V8 Engine',
      '4WD',
      'Crew Cab',
      'Trailer Package',
      'Spray-In Bedliner',
      'Power Driver Seat',
      'Rear Vision Camera'
    ],
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1623793047686-d18a3f6c3037?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566023888293-c1d2f0dcb1e9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1626668011725-818b2ef85f6b?w=800&h=600&fit=crop'
    ],
    isFeatured: true,
    vin: 'GMC456SIERRA1500'
  },
  {
    id: '4',
    make: 'Dodge',
    model: 'Charger R/T',
    year: 2023,
    price: 42800,
    mileage: 12200,
    condition: 'Certified',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Pitch Black',
    description: 'The Dodge Charger R/T delivers American muscle with modern convenience. This certified pre-owned sedan features the legendary HEMI V8 and aggressive styling.',
    features: [
      '5.7L HEMI V8 Engine',
      '370 Horsepower',
      'RWD',
      'Performance Suspension',
      'Sport Mode',
      'Uconnect 8.4" Display',
      'Performance Hood'
    ],
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
    ],
    isFeatured: true,
    vin: 'DODGE789CHARGER'
  },
  {
    id: '5',
    make: 'Toyota',
    model: 'RAV4 XLE',
    year: 2025,
    price: 35980,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Lunar Rock',
    description: 'The all-new Toyota RAV4 XLE is perfect for active lifestyles. With standard AWD, impressive cargo space, and top safety ratings, it\'s ready for anything.',
    features: [
      'AWD',
      'Toyota Safety Sense 3.0',
      'Wireless Phone Charging',
      'Power Liftgate',
      'SofTex Seats',
      'Blind Spot Monitor',
      '8-Inch Touchscreen'
    ],
    images: [
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'TOYOTA555RAV4XLE'
  },
  {
    id: '6',
    make: 'Nissan',
    model: 'Altima SR',
    year: 2023,
    price: 26750,
    mileage: 22100,
    condition: 'Used',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Deep Blue Pearl',
    description: 'This Nissan Altima SR offers sporty styling and excellent fuel economy. Well-maintained with low mileage, it\'s a great value for a reliable daily driver.',
    features: [
      '2.5L 4-Cylinder Engine',
      'Sport Suspension',
      'Paddle Shifters',
      'Rear Spoiler',
      'NissanConnect',
      'Automatic Emergency Braking',
      '19" Aluminum Wheels'
    ],
    images: [
      'https://images.unsplash.com/photo-1617531653520-bd466c5d6e85?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-cf8a7d3f3a95?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'NISSAN333ALTIMA'
  },
  {
    id: '7',
    make: 'GMC',
    model: 'Acadia Denali',
    year: 2024,
    price: 54200,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'White Frost Tricoat',
    description: 'The GMC Acadia Denali is the epitome of refinement in a midsize SUV. With three rows of seating and premium amenities, it\'s perfect for growing families.',
    features: [
      '3.6L V6 Engine',
      'AWD',
      'Adaptive Cruise Control',
      'Leather Seating',
      'Bose Premium Audio',
      'Hands-Free Liftgate',
      'Heated & Ventilated Seats'
    ],
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'GMC888ACADIADEN'
  },
  {
    id: '8',
    make: 'Dodge',
    model: 'Durango SRT',
    year: 2024,
    price: 72995,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Destroyer Gray',
    description: 'The Dodge Durango SRT is a true performance SUV with room for seven. Packing a supercharged V8, it delivers thrilling acceleration without sacrificing practicality.',
    features: [
      '6.4L HEMI V8 Engine',
      '475 Horsepower',
      'AWD',
      'Launch Control',
      'Adaptive Damping Suspension',
      'Harman Kardon Audio',
      'SRT Performance Pages'
    ],
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566023888293-c1d2f0dcb1e9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'DODGE999DURANGO'
  },
  {
    id: '9',
    make: 'Toyota',
    model: 'Tacoma TRD Off-Road',
    year: 2024,
    price: 44680,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Truck',
    color: 'Army Green',
    description: 'The Toyota Tacoma TRD Off-Road is built for adventure. With legendary reliability and proven off-road capability, it\'s ready to take you anywhere.',
    features: [
      '3.5L V6 Engine',
      '4WD',
      'Multi-Terrain Select',
      'Crawl Control',
      'Locking Rear Differential',
      'Off-Road Tuned Suspension',
      'LED Fog Lights'
    ],
    images: [
      'https://images.unsplash.com/photo-1566023992774-f5f9362bbb15?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1626668011725-818b2ef85f6b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1623793047686-d18a3f6c3037?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'TOYOTA777TACOMA'
  },
  {
    id: '10',
    make: 'Nissan',
    model: 'Pathfinder SL',
    year: 2023,
    price: 41250,
    mileage: 18900,
    condition: 'Certified',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Magnetic Black Pearl',
    description: 'This certified Nissan Pathfinder SL offers three-row seating and advanced safety features. Perfect for families who need space without compromising on style.',
    features: [
      '3.5L V6 Engine',
      'AWD',
      'Tri-Zone Climate Control',
      'Around View Monitor',
      'Wireless Apple CarPlay',
      'Power Liftgate',
      'Remote Start'
    ],
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'NISSAN222PATHF'
  },
  {
    id: '11',
    make: 'GMC',
    model: 'Terrain AT4',
    year: 2024,
    price: 38995,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Summit White',
    description: 'The GMC Terrain AT4 combines rugged styling with refined comfort. This compact SUV is equipped for light off-roading while maintaining on-road manners.',
    features: [
      '2.0L Turbo Engine',
      'AWD',
      'Off-Road Suspension',
      'Hill Descent Control',
      'Heated Steering Wheel',
      'Wireless Charging',
      'GMC Pro Safety Plus'
    ],
    images: [
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'GMC111TERRAIN'
  },
  {
    id: '12',
    make: 'Dodge',
    model: 'Grand Caravan SE',
    year: 2023,
    price: 28900,
    mileage: 24500,
    condition: 'Used',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Granite Crystal',
    description: 'This Dodge Grand Caravan SE is the ultimate family vehicle. With Stow \'n Go seating and ample cargo space, it\'s perfect for road trips and everyday errands.',
    features: [
      '3.6L V6 Engine',
      'Stow \'n Go Seating',
      '7-Passenger Seating',
      'Rear Climate Control',
      'Uconnect Touchscreen',
      'Rear Parking Sensors',
      'Roof Rack'
    ],
    images: [
      'https://images.unsplash.com/photo-1600705722796-46702d3ab01c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570733577064-6b6c3e8ab0a6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'
    ],
    isFeatured: false,
    vin: 'DODGE444CARAVAN'
  }
];

export function getCarById(id: string): Car | undefined {
  return cars.find(car => car.id === id);
}

export function getFeaturedCars(): Car[] {
  return cars.filter(car => car.isFeatured);
}

export function getCarsByCondition(condition: Car['condition']): Car[] {
  return cars.filter(car => car.condition === condition);
}

export function searchCars(query: string): Car[] {
  const lowerQuery = query.toLowerCase();
  return cars.filter(car => 
    car.make.toLowerCase().includes(lowerQuery) ||
    car.model.toLowerCase().includes(lowerQuery) ||
    car.color.toLowerCase().includes(lowerQuery) ||
    car.bodyType.toLowerCase().includes(lowerQuery)
  );
}
