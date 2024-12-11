"use client";

import { IOption } from "@/interfaces/SelectInterfaces";
import { useEffect, useState } from "react";

type SelectProps = {
  value: string | number;
  onChange: (option: IOption) => void;
  getOptions: () => Promise<IOption[]> | IOption[];
  disabled?: boolean;
  className?: string
};

export function SelectComponent({
  getOptions,
  value,
  onChange,
  disabled,
  className
}: SelectProps) {
  const [options, setOptions] = useState<[] | IOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateOptions = async () => {
      const options: IOption[] = await getOptions();
      setOptions(options);
    };
    generateOptions();
    setLoading(false);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (option) => String(option.value) === event.target.value
    );
    if (selectedOption) {
      onChange(selectedOption);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <select className={className} value={value} onChange={handleChange} disabled={disabled}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}
