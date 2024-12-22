import { db } from "@config/firebaseConfig";
import { User } from "@entities/user";

export const getUserFromFirestore = async (
  userId: string
): Promise<User | null> => {
  const userData = await db.collection("users").doc(userId).get();
  if (!userData.exists) {
    return null;
  }
  return { id: userData.id, ...userData.data() } as User;
};

export const createUserInFirestore = async (params: User): Promise<string> => {
  const userData = await db.collection("users").add(params);
  return userData.id;
};

export const updateUserInFirestore = async (
  userId: string,
  updatedData: Partial<User>
): Promise<boolean> => {
  const userQuery = db.collection("users").doc(userId);

  const userData = await userQuery.get();
  if (!userData.exists) {
    return false;
  }

  await userQuery.update(updatedData);
  return true;
};
