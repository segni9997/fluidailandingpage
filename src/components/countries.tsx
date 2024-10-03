import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

interface Country {
  name: string;
  code: string;
  flag: string;
}

const CountryAutoComplete: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    // Fetch countries with flags
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const formattedCountries = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2.toLowerCase(),
          flag: country.flags.svg,
        }));
        setCountries(formattedCountries);
      });
  }, []);

  const handleChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "2px solid gray", // Bottom border only
      boxShadow: "none",
      "&:hover": { borderBottom: "2px solid white" }, // Change border on hover
      width: "400px",
      color: "white",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "black",
      overflow: "hidden", // Hide scrollbar
      marginTop: 0, // Remove margin for better alignment
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "white" : "gray",
      backgroundColor: state.isSelected ? "gray" : "black",
      height: "30px", // Reduce height of option
      padding: "5px 10px", // Adjust padding
      display: "flex",
      alignItems: "center", // Center align items
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "white", // White text for selected value
    }),
  };

  // Custom component for rendering the flag and country name in the options
  const FlagOption = (props: any) => {
    return (
      <components.Option {...props}>
        <div className="flex items-center">
          <img
            src={props.data.flag}
            alt={props.data.name}
            style={{ width: "20px", borderRadius: "50%", marginRight: "10px" }}
          />
          <span>{props.data.name}</span>
        </div>
      </components.Option>
    );
  };

  // Custom component for rendering the selected value with flag
  const SelectedValue = (props: any) => {
    return (
      <div className="flex items-center">
        <img
          src={props.data.flag}
          alt={props.data.name}
          style={{ width: "20px", borderRadius: "50%", marginRight: "10px" }}
        />
        <span>{props.data.name}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center mt-10">
    
      <Select
        value={selectedCountry}
        onChange={handleChange}
        options={countries}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}
        components={{ Option: FlagOption, SingleValue: SelectedValue }} // Use the custom components
        placeholder="Search for a country"
        styles={customStyles}
        isClearable
      />
    </div>
  );
};

export default CountryAutoComplete;
