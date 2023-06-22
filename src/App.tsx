import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource
          name="posts"
          edit={EditGuesser}
          list={ListGuesser}
          show={ShowGuesser}
      />
  </Admin>
);

export default App;
