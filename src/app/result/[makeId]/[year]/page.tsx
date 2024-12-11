import { IVehicleInfo } from "@/interfaces/AllVehiclesName";
import { fetchVehicleMakes, generateYears } from "../../../../lib/api";
import { Suspense } from "react";
import VehiclesList from "./VehiclesList";

interface PageProps {
    makeId: string,
    year: number
}

export async function generateStaticParams() {
  const makes = await fetchVehicleMakes();
  const years = generateYears();

  const paths = makes.flatMap((make: IVehicleInfo) =>
    years.map((year) => ({
      makeId: make.MakeId,
      year: year.toString(),
    }))
  );

  return paths.map(({ makeId, year }: PageProps) => ({
    params: { makeId, year },
  }));
}

export default async function ResultPage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const { makeId, year } = await params;

  return (
    <Suspense
      fallback={
        <div>
          Loading...
        </div>
      }
    >
      <VehiclesList makeId={makeId} year={year} />
    </Suspense>
  );
}
