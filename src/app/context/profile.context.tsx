import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../models/user";
import { RegisterResponse } from "../models/response/auth/user.response";
const ProfileContext = createContext<User>({} as User);

export function ProfileWrapper({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<RegisterResponse>({} as RegisterResponse);
  // const contextValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  console.log(value);
  return (
    <ProfileContext.Provider value={{ value, setValue }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext(): User {
  return useContext(ProfileContext);
}
