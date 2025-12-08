import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

const carsFilePath = path.join(process.cwd(), 'src/data/cars.ts');

async function readCarsFile() {
  const content = await fs.readFile(carsFilePath, 'utf-8');
  return content;
}

async function writeCarsFile(content: string) {
  await fs.writeFile(carsFilePath, content, 'utf-8');
}

// Check authentication middleware
function checkAuth(cookies: any) {
  const adminToken = cookies.get('admin_token')?.value;
  return adminToken === 'villacar_admin_2025';
}

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const newCar = await request.json();
    const fileContent = await readCarsFile();
    
    // Find the array closing bracket and insert before it
    const arrayEndIndex = fileContent.lastIndexOf('];');
    if (arrayEndIndex === -1) {
      throw new Error('Invalid cars.ts file format');
    }
    
    // Format the new car object
    const carString = `  {
    id: '${newCar.id}',
    make: '${newCar.make}',
    model: '${newCar.model}',
    year: ${newCar.year},
    price: ${newCar.price},
    mileage: ${newCar.mileage},
    condition: '${newCar.condition}',
    fuelType: '${newCar.fuelType}',
    transmission: '${newCar.transmission}',
    bodyType: '${newCar.bodyType}',
    color: '${newCar.color}',
    description: '${newCar.description.replace(/'/g, "\\'")}',
    features: [
${newCar.features.map((f: string) => `      '${f.replace(/'/g, "\\'")}'`).join(',\n')}
    ],
    images: [
${newCar.images.map((img: string) => `      '${img}'`).join(',\n')}
    ],
    isFeatured: ${newCar.isFeatured},
    vin: '${newCar.vin}'
  },\n`;
    
    const newContent = fileContent.slice(0, arrayEndIndex) + carString + fileContent.slice(arrayEndIndex);
    await writeCarsFile(newContent);
    
    return new Response(JSON.stringify({ success: true, car: newCar }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error adding car:', error);
    return new Response(JSON.stringify({ error: 'Failed to add car' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
