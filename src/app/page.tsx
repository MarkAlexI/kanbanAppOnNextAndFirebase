"use client";

import Sidebar from "./components/Sidebar";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./utils/firebaseConfig";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { data } from "./utils/data";

export default function Home() {
  const [userDetails, setUserDetails] = useState<{ [key: string]: any }>();

  const getUserSession = async () => {
    const session = await getSession();
    if (session) {
      setUserDetails(session.user);
    }
  };

  return (
    <main className="flex h-full">
      <Sidebar />
    </main>
  )
}
