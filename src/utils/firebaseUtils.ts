// firebaseUtils.js
import { auth, db } from "../routes/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// 현재 로그인한 사용자의 UID 가져오기
export const getCurrentUserId = (): string => {
  const user = auth.currentUser;
  if (!user) throw new Error("사용자가 로그인되어 있지 않습니다.");
  return user.uid;
};

// Firestore에 데이터 저장하기
export const saveDataToFirestore = async <T>(
  collection: string,
  docId: string,
  data: T
): Promise<void> => {
  try {
    const docRef = doc(db, collection, docId);
    await setDoc(docRef, data, { merge: true });
    console.log("데이터 저장 성공");
  } catch (error) {
    console.error("데이터 저장 실패:", error);
    throw error;
  }
};

// Firestore에서 데이터 가져오기
export const getDataFromFirestore = async <T>(
  collection: string,
  docId: string
): Promise<T | null> => {
  try {
    const docRef = doc(db, collection, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as T;
    } else {
      console.warn("저장된 데이터가 없습니다.");
      return null;
    }
  } catch (error) {
    console.error("데이터 로드 실패:", error);
    throw error;
  }
};
