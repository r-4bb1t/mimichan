import { useEffect } from "react";
import { motion } from "framer-motion";

interface IAlertProps {
  close(): void;
  type: "info" | "success" | "warning" | "error";
  title?: string;
  message: string;
}

const Icon = ({ type }: { type: IAlertProps["type"] }) => {
  switch (type) {
    case "info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "success":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
    case "error":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
};

export function Alert({ close, type, title, message }: IAlertProps) {
  const handleClick = () => close();

  useEffect(() => {
    const timeout = setTimeout(() => {
      close();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [close]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`alert alert-${type} shadow-lg`}
    >
      <div>
        <Icon type={type} />
        <div className={"flex flex-col items-start gap-0"}>
          {!!title && <h3 className="font-bold">{title}</h3>}
          <p>{message}</p>
        </div>
      </div>
      <div className="flex-none">
        <button onClick={handleClick} className="btn btn-ghost btn-sm">
          Close
        </button>
      </div>
    </motion.div>
  );
}
