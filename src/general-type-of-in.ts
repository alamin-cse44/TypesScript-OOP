{
  //

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    }else{
        return param1.toString() + param2.toString();
    }
  };

//   console.log(add(2, 3));
//   console.log(add("2", 3));

   type NormalUser = {
    name: string;
   }

   type AdminUser = {
    name: string;
    role: "admin"
   }

   const normalUser : NormalUser = {
    name : "John",
   }
   const adminUser : AdminUser = {
    name : "Jane",
    role : "admin",
   }

   type User = NormalUser | AdminUser;
   
   const getUser = (user : User) => {
    if("role" in user){
        return `User ${user.name} is an admin with role ${user.role}`;
    }else{
        return `User ${user.name} is a normal user`;
    }
   }

   console.log(getUser(normalUser));
   console.log(getUser(adminUser));

  //
}
