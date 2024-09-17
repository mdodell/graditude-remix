import { rem } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useEffect } from "react";
import { Toast } from "~/utils/toast.server";

const color = (type: Toast["type"]) => {
  switch (type) {
    case "success":
      return "green";
    case "error":
      return "red";
    case "message":
    default:
      return "blue";
  }
};

const icon = (type: Toast["type"]) => {
  const styles = { width: rem(20), height: rem(20) };
  const xIcon = <IconX style={styles} />;
  const checkIcon = <IconCheck style={styles} />;
  switch (type) {
    case "success":
      return checkIcon;
    case "error":
      return xIcon;
    case "message":
    default:
      return "information-circle";
  }
};

export function useToast(toast?: Toast | null) {
  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        notifications.show({
          id: toast.id,
          title: toast.title,
          message: toast.description,
          color: color(toast.type),
          icon: icon(toast.type),
        });
      }, 0);
    }
  }, [toast]);
}
