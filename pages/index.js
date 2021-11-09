import Dashboard from "../components/Dashboard";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Dashboard />;
  } else {
    router.push("/login");
  }
}
