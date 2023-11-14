import { Num } from "../../ui/Num";

const Numresults = ({ movies }) => {
  return (
    <Num>
      Found <strong>{movies.length}</strong> results
    </Num>
  );
};

export default Numresults;
