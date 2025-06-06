import { useState, useEffect } from "react";
import PropertiesPossibilities from "../../entities/Properties/PropertiesPossibilities";
import PropertiesConnect from "../../entities/Properties/PropertiesConnect";

function PropertiesFilter({ properties }) {
  const [priceRange, setPriceRange] = useState("all");
  const [location, setLocation] = useState("all");
  const [sizeRange, setSizeRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    let filtered = properties;

    // Фильтр по цене
    if (priceRange !== "all") {
      filtered = filtered.filter((property) => {
        const [min, max] = priceRange.includes("+")
          ? [parseInt(priceRange), Infinity]
          : priceRange.split("-").map(Number);
        return property.price >= min && property.price <= max;
      });
    }

    // Фильтр по локации
    if (location !== "all") {
      filtered = filtered.filter((property) => property.location === location);
    }

    // Фильтр по размеру
    if (sizeRange !== "all") {
      filtered = filtered.filter((property) => {
        const [min, max] = sizeRange.includes("+")
          ? [parseInt(sizeRange), Infinity]
          : sizeRange.split("-").map(Number);
        return property.size >= min && property.size <= max;
      });
    }

    // Фильтр по типу недвижимости
    if (propertyType !== "all") {
      filtered = filtered.filter((property) => property.type === propertyType);
    }

    setFilteredProperties(filtered);
  }, [priceRange, location, sizeRange, propertyType, properties]);

  return (
    <div>

      <form action="" class="properties__filter-selects" id="filterForm">
              <fieldset class="properties__fieldset">
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="properties__svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53975 20.351C8.56995 20.3685 8.59369 20.3821 8.6105 20.3915L8.63843 20.4071C8.8613 20.5294 9.13776 20.5285 9.36084 20.4075L9.3895 20.3915C9.40631 20.3821 9.43005 20.3685 9.46025 20.351C9.52066 20.316 9.60697 20.265 9.7155 20.1982C9.93246 20.0646 10.2388 19.8676 10.6046 19.6091C11.3351 19.0931 12.3097 18.3274 13.2865 17.3273C15.2307 15.3368 17.25 12.3462 17.25 8.5C17.25 3.94365 13.5563 0.25 9 0.25C4.44365 0.25 0.75 3.94365 0.75 8.5C0.75 12.3462 2.76932 15.3368 4.71346 17.3273C5.69025 18.3274 6.66491 19.0931 7.39539 19.6091C7.76125 19.8676 8.06754 20.0646 8.2845 20.1982C8.39303 20.265 8.47934 20.316 8.53975 20.351ZM9 11.5C10.6569 11.5 12 10.1569 12 8.5C12 6.84315 10.6569 5.5 9 5.5C7.34315 5.5 6 6.84315 6 8.5C6 10.1569 7.34315 11.5 9 11.5Z" fill="#999999"/>
                  </svg>                  
                <select
                name="location"
                className="properties__filter-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}>
                  
                  <option value="all">Location</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Los-Angeles">Los Angeles</option>
                  <option value="Miami">Miami</option>
                </select>
              </fieldset>
              <fieldset class="properties__fieldset">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="properties__svg">
                  <path d="M18.2057 1.70487C18.595 1.56331 18.7958 1.13299 18.6543 0.743714C18.5127 0.354439 18.0824 0.153621 17.6931 0.295176L5.19958 4.83828V1.00002C5.19958 0.585809 4.8638 0.250023 4.44958 0.250023H2.94958C2.53537 0.250023 2.19958 0.585809 2.19958 1.00002V5.92919L1.19312 6.29518C0.80384 6.43673 0.603023 6.86705 0.744578 7.25633C0.886132 7.6456 1.31646 7.84642 1.70573 7.70487L18.2057 1.70487Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.21854 9.11455L17.1996 3.6669V7.0884L21.2057 8.54518C21.595 8.68673 21.7958 9.11705 21.6543 9.50633C21.5127 9.8956 21.0824 10.0964 20.6931 9.95487L20.1994 9.77534V18.25H20.9496C21.3638 18.25 21.6996 18.5858 21.6996 19C21.6996 19.4142 21.3638 19.75 20.9496 19.75H1.44958C1.03537 19.75 0.699585 19.4142 0.699585 19C0.699585 18.5858 1.03537 18.25 1.44958 18.25H2.19958V9.12135L2.21854 9.11455ZM17.1996 18.25V8.68449L18.6994 9.22989V18.25H17.1996ZM8.19958 12.25C7.78537 12.25 7.44958 12.5858 7.44958 13V17.5C7.44958 17.9142 7.78537 18.25 8.19958 18.25H11.1996C11.6138 18.25 11.9496 17.9142 11.9496 17.5V13C11.9496 12.5858 11.6138 12.25 11.1996 12.25H8.19958Z" fill="#999999"/>
                  </svg>
                  
                <select
                 name="type"
                 className="properties__filter-select"
                 value={propertyType}
                 onChange={(e) => setPropertyType(e.target.value)}>
                    <option value="all">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                </select>
              </fieldset>
                <fieldset class="properties__fieldset">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="properties__svg">
                    <path d="M11.4004 4.5C10.1577 4.5 9.15039 5.50736 9.15039 6.75C9.15039 7.99264 10.1577 9 11.4004 9C12.643 9 13.6504 7.99264 13.6504 6.75C13.6504 5.50736 12.643 4.5 11.4004 4.5Z" fill="#999999"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.900391 1.875C0.900391 0.839466 1.73986 0 2.77539 0H20.0254C21.0609 0 21.9004 0.839466 21.9004 1.875V11.625C21.9004 12.6605 21.0609 13.5 20.0254 13.5H2.77539C1.73986 13.5 0.900391 12.6605 0.900391 11.625V1.875ZM7.65039 6.75C7.65039 4.67893 9.32932 3 11.4004 3C13.4715 3 15.1504 4.67893 15.1504 6.75C15.1504 8.82107 13.4715 10.5 11.4004 10.5C9.32932 10.5 7.65039 8.82107 7.65039 6.75ZM18.1504 6C17.7362 6 17.4004 6.33579 17.4004 6.75V6.7575C17.4004 7.17171 17.7362 7.5075 18.1504 7.5075H18.1579C18.5721 7.5075 18.9079 7.17171 18.9079 6.7575V6.75C18.9079 6.33579 18.5721 6 18.1579 6H18.1504ZM3.90039 6.75C3.90039 6.33579 4.23618 6 4.65039 6H4.65789C5.0721 6 5.40789 6.33579 5.40789 6.75V6.7575C5.40789 7.17171 5.0721 7.5075 4.65789 7.5075H4.65039C4.23618 7.5075 3.90039 7.17171 3.90039 6.7575V6.75Z" fill="#999999"/>
                    <path d="M1.65039 15C1.23618 15 0.900391 15.3358 0.900391 15.75C0.900391 16.1642 1.23618 16.5 1.65039 16.5C7.05044 16.5 12.2806 17.2222 17.2502 18.5749C18.4407 18.899 19.6504 18.0168 19.6504 16.7551V15.75C19.6504 15.3358 19.3146 15 18.9004 15H1.65039Z" fill="#999999"/>
                    </svg>
                    
                <select
                name="price"
                className="properties__filter-select"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                >
                    <option value="all">Pricing Range</option>
                    <option value="50000-150000">50.000$ - 150.000$</option>
                    <option value="150000-300000">150.000$ - 300.000$</option>
                    <option value="300000-500000">300.000$ - 500.000$</option>
                    <option value="500000-1000000">500.000$ - 1.000.000$</option>
                    <option value="1000000+">1.000.000$+</option>
                </select>
              </fieldset >
                <fieldset class="properties__fieldset">
                  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"  class="properties__svg">
                    <path d="M10.9775 0.602166C10.744 0.465945 10.4552 0.465945 10.2217 0.602166L1.59961 5.63172L10.5996 10.8817L19.5996 5.63172L10.9775 0.602166Z" fill="#999999"/>
                    <path d="M20.3496 6.93078L11.3496 12.1808V21.1808L19.9775 16.1478C20.2079 16.0134 20.3496 15.7668 20.3496 15.5V6.93078Z" fill="#999999"/>
                    <path d="M9.84961 21.1808V12.1808L0.849609 6.93078V15.5C0.849609 15.7668 0.991293 16.0134 1.22171 16.1478L9.84961 21.1808Z" fill="#999999"/>
                    </svg>
                    
                <select
                name="size"
                className="properties__filter-select"
                value={sizeRange}
                onChange={(e) => setSizeRange(e.target.value)}>
                    <option value="all">Property Size</option>
                    <option value="50-100">50m² - 100m²</option>
                    <option value="100-200">100m² - 200m²</option>
                    <option value="200-300">200m² - 300m²</option>
                    <option value="300+">300m²+</option>
                </select>
              </fieldset>
            </form>
      <main className="main container">
        <PropertiesPossibilities 
          properties={filteredProperties}
        />
        <PropertiesConnect />
      </main>

      
    </div>
  );
}

export default PropertiesFilter;
