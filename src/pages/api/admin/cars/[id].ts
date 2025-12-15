import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const prerender = false;

const carsFilePath = path.join(process.cwd(), 'src/data/cars.ts');

async function readCarsFile() {
  const content = await fs.readFile(carsFilePath, 'utf-8');
  return content;
}

async function writeCarsFile(content: string) {
  await fs.writeFile(carsFilePath, content, 'utf-8');
}

function checkAuth(cookies: any) {
  const adminToken = cookies.get('admin_token')?.value;
  return adminToken === 'villacar_admin_2025';
}

// GET - Fetch single car
export const GET: APIRoute = async ({ params, cookies }) => {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { id } = params;
    const { cars } = await import('../../../../data/cars');
    const car = cars.find(c => c.id === id);
    
    if (!car) {
      return new Response(JSON.stringify({ error: 'Car not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify(car), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch car' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// PUT - Update car
export const PUT: APIRoute = async ({ params, request, cookies }) => {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { id } = params;
    const updatedCar = await request.json();
    const fileContent = await readCarsFile();
    
    // Find the car object by id and replace it
    const idPattern = new RegExp(`\\{[^}]*id:\\s*'${id}'[^}]*\\}(?=,?\\s*(?:\\{|\\];))`, 's');
    
    if (!idPattern.test(fileContent)) {
      return new Response(JSON.stringify({ error: 'Car not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const carString = `{
    id: '${updatedCar.id}',
    make: '${updatedCar.make}',
    model: '${updatedCar.model}',
    year: ${updatedCar.year},
    price: ${updatedCar.price},
    mileage: ${updatedCar.mileage},
    condition: '${updatedCar.condition}',
    fuelType: '${updatedCar.fuelType}',
    transmission: '${updatedCar.transmission}',
    bodyType: '${updatedCar.bodyType}',
    color: '${updatedCar.color}',
    description: '${updatedCar.description.replace(/'/g, "\\'")}',
    features: [
${updatedCar.features.map((f: string) => `      '${f.replace(/'/g, "\\'")}'`).join(',\n')}
    ],
    images: [
${updatedCar.images.map((img: string) => `      '${img}'`).join(',\n')}
    ],
    isFeatured: ${updatedCar.isFeatured},
    vin: '${updatedCar.vin}'
  }`;
    
    const newContent = fileContent.replace(idPattern, carString);
    await writeCarsFile(newContent);
    
    return new Response(JSON.stringify({ success: true, car: updatedCar }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating car:', error);
    return new Response(JSON.stringify({ error: 'Failed to update car' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// DELETE - Remove car
export const DELETE: APIRoute = async ({ params, cookies }) => {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { id } = params;
    const fileContent = await readCarsFile();
    
    // Find and remove the car object, including trailing comma
    const idPattern = new RegExp(`\\{[^}]*id:\\s*'${id}'[^}]*\\},?\\s*`, 's');
    
    if (!idPattern.test(fileContent)) {
      return new Response(JSON.stringify({ error: 'Car not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const newContent = fileContent.replace(idPattern, '');
    await writeCarsFile(newContent);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error deleting car:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete car' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
