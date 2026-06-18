import { getUsers } from "../getUsers";

async function checkForm(login: string, password: string) {
  const getData = await getUsers();1
  const filterData = getData.find((user) => user.login === login && user.password === password);
  filterData ? console.log("Authed") : console.log("Error Wrong Login or Password");
}

export default checkForm;
