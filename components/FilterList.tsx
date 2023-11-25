// FilterList.tsx
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterListProps<T> {
  selectedValue: T | null;
  options: T[];
  onChange: (value: T | null) => void;
  label: string;
}

function FilterList<T extends { _id: string; name: string }>({
  selectedValue,
  options,
  onChange,
  label,
}: FilterListProps<T>) {
  const [newSelected, setNewSelected] = useState<string | undefined>("");
  return (
    <div className="relative w-[150px] text-sm md:w-[200px] rounded-md">
      <Listbox
        value={selectedValue}
        onChange={(value) => {
          onChange(value);
          setNewSelected(value?.name);
        }}>
        <div className="relative w-full">
          <Listbox.Button className="w-full text-xs md:text-base px-4 py-2 border rounded">
            <span className="mr-4">{newSelected ? newSelected : label}</span>
            <span className="absolute inset-y-0 right-0 flex flex-col justify-center items-center px-2 pointer-events-none">
              <FaChevronUp size={12} className="text-gray-600" />
              <FaChevronDown size={12} className="text-gray-600" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option._id}
                  value={option}
                  className={({ active, selected }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active || newSelected === option.name
                        ? "bg-green-300 text-green-900"
                        : "text-gray-900"
                    }`
                  }>
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}>
                      {option.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
  

export default FilterList;
