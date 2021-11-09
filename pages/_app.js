import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <Container
      className="mt-4 d-flex aligh-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </div>
    </Container>
  );
}

export default MyApp;
