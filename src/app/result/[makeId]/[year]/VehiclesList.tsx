import { IModelInfo } from '@/interfaces/AllVehiclesName';
import { fetchVehicleData } from '../../../../lib/api';
import { notFound } from 'next/navigation';

export default async function VehiclesList({
  makeId,
  year,
}: {
  makeId: string;
  year: number;
}) {
  const vehicleData = await fetchVehicleData(makeId, year);

  if (!vehicleData) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Vehicles for {makeId} in {year}
      </h1>
      <ul className="space-y-3">
        {vehicleData.map((model: IModelInfo, idx: number) => (
          <li
            className="bg-gray-100 p-4 rounded-md hover:bg-blue-50 transition-colors text-gray-900"
            key={idx}
          >
            {model.Model_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}
