import { useEffect, useState } from "react";
import { supabase } from "./config/supabase";

const App = () => {

  const [countries, setCountries] = useState<any[] | null>([]);

  async function getCountries(): Promise<void> {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  useEffect(() => {
    // getCountries();
  }, []);

  return (
    <>
      <button onClick={getCountries}>Load countries</button>
      <ul>
        {countries!.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      {countries?.length === 0 && <p>No countries loaded</p>}
    </>
  );
}
 
export default App;