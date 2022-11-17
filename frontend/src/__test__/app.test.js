import home from "../components/Home";

it("calls axios and returns all users", () =>{
    const users = home("users");
    console.log(users);
}) 