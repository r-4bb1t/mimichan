import { createContext, FC, useState } from "react";
import { Alert } from "components/Alert";
import { AnimatePresence } from "framer-motion";

interface IAlert {
  type: "info" | "success" | "warning" | "error";
  title?: string;
  message: string;
}

interface IAlertsWithId extends IAlert {
  id: number;
}

interface IAlertContext {
  alerts: IAlertsWithId[];
  push(alert: IAlert): void;
  close(id: number): void;
}

const doNothing = () => null;

export const AlertContext = createContext<IAlertContext>({
  alerts: [],
  push: doNothing,
  close: doNothing,
});

const AlertContextProvider: FC = ({ children }) => {
  const [alerts, setAlerts] = useState<IAlertsWithId[]>([]);

  const push = (alert: IAlert) => setAlerts((prev) => [...prev, { id: +new Date(), ...alert }]);
  const close = (id: number) => setAlerts((prev) => prev.filter((a) => a.id !== id));

  return (
    <AlertContext.Provider
      value={{
        alerts,
        push,
        close,
      }}
    >
      <aside className={"fixed top-8 inset-x-4 container mx-auto flex flex-col gap-4"}>
        <AnimatePresence>
          {alerts.map(({ id, type, title, message }) => (
            <Alert key={id} type={type} title={title} message={message} close={() => close(id)} />
          ))}
        </AnimatePresence>
      </aside>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
