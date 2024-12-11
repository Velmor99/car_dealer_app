export async function fetchVehicleMakes() {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );
  const data = await res.json();
  return data.Results;
}

export async function fetchVehicleData(makeId: string, year: number) {
    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
    const data = await res.json()
    return data.Results;
}

export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 2015; i <= currentYear; i++) {
    years.push(i);
  }
  return years;
};
