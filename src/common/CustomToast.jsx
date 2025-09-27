import { Toast } from "react-bootstrap";
function CustomToast({ setShowToast, showToast, toastMessage, toastVariant }) {
  return (
    <Toast
      show={showToast}
      onClose={() => setShowToast(false)}
      delay={3500}
      autohide
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 9999,
        minWidth: 320,
        background: toastVariant === "success" ? "#d1f7c4" : "#f8d7da",
        border:
          toastVariant === "success"
            ? "2px solid #28a745"
            : "2px solid #dc3545",
        boxShadow: "0 4px 16px rgba(40,167,69,0.15)",
        color: toastVariant === "success" ? "#155724" : "#721c24",
        opacity: showToast ? 1 : 0,
        transform: showToast ? "translateY(0)" : "translateY(-30px)",
        transition:
          "opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <Toast.Header
        style={{
          background: toastVariant === "success" ? "#28a745" : "#dc3545",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1.1rem",
        }}
      >
        <span
          role="img"
          aria-label={toastVariant === "success" ? "success" : "error"}
          style={{ marginRight: 8 }}
        >
          {toastVariant === "success" ? "✅" : "❌"}
        </span>
        <strong className="me-auto">
          {toastVariant === "success" ? "Success" : "Error"}
        </strong>
      </Toast.Header>
      <Toast.Body style={{ fontSize: "1.05rem", fontWeight: 500 }}>
        {toastMessage}
      </Toast.Body>
    </Toast>
  );
}

export default CustomToast;
