import "./Items.css";

import { useQuery } from "@apollo/client";
import { GET_VENUE_ITEMS } from "./item-gpl";

import Table from "../../components/Table/Table/Table";

export default function Items() {
  const { loading, error, data } = useQuery(GET_VENUE_ITEMS);

  if (loading) return <h5>loading...</h5>;
  if (error) return <h5>Error! {error.message}</h5>;

  return (
    <div>
      <Table />
    </div>
  );
}
