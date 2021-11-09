import { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      router.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email : </strong>
          {currentUser.email}
          <Link className="btn btn-primary w-100 mt-3" href="/update-profile">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
