import { useEffect } from "react";

const Toast = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const getToastClass = () => {
    switch (type) {
      case "success":
        return "toast-success";
      case "error":
        return "toast-error";
      case "warning":
        return "toast-warning";
      default:
        return "toast-info";
    }
  };

  return (
    <div
      className={`toast ${getToastClass()}`}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        padding: "12px 20px",
        borderRadius: "4px",
        color: "white",
        fontWeight: "500",
        minWidth: "300px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        backgroundColor:
          type === "success"
            ? "#28a745"
            : type === "error"
            ? "#dc3545"
            : type === "warning"
            ? "#ffc107"
            : "#17a2b8",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
