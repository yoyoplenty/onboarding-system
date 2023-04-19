import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>({});

  const contextValue: any = { user, setUser };
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
