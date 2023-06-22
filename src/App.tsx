import { Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";

const App = () => (
  <div>
    <Resource
      name="posts"
      edit={EditGuesser}
      list={<ListGuesser />}
      show={ShowGuesser}
    />
  </div>
);

export default App;
