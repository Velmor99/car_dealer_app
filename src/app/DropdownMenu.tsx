'use client';
import { useState } from 'react';
import { fetchVehicleMakes, generateYears } from '../lib/api';
import { IVehicleInfo } from '@/interfaces/AllVehiclesName';
import { SelectComponent } from '@/components/SelectComponent';
import { IOption } from '@/interfaces/SelectInterfaces';
import Link from 'next/link';

export function DropdownMenu() {
  const [selectedVehicle, setSelectedVehicle] = useState<IOption | null>(null);
  const [selectedYear, setSelectedYear] = useState<IOption | null>(null);

  const isNextDisabled = !selectedVehicle || !selectedYear;

  function onVehicleSelect(option: IOption) {
    setSelectedVehicle(option);
  }

  function onYearSelect(option: IOption) {
    setSelectedYear(option);
  }

  const fetchData = async () => {
    const response: IVehicleInfo[] = await fetchVehicleMakes();
    const convertedToOptions = [
      ...response.map((vehicle) => ({
        label: vehicle.MakeName,
        value: vehicle.MakeId,
      })),
    ];
    return convertedToOptions;
  };

  const allYears = () => {
    return generateYears().map((year) => ({
      value: year,
      label: year,
    }));
  };

  return (
    <div className="">
      <div className="flex sm:flex-col lg:flex-row sm:gap-4">
        <SelectComponent
          className="block w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 font-medium transition duration-150 ease-in-out"
          getOptions={fetchData}
          onChange={onVehicleSelect}
          value={selectedVehicle?.value || ''}
        />
        <SelectComponent
          className="block w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 font-medium transition duration-150 ease-in-out"
          getOptions={allYears}
          onChange={onYearSelect}
          value={selectedYear?.value || 2015}
        />
        <div className="flex flex-row justify-end">
          <Link
            href={`/result/${selectedVehicle?.value}/${selectedYear?.value}`}
          >
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-300"
              disabled={isNextDisabled}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
